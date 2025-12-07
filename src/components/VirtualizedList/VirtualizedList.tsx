'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';

/**
 * VirtualizedList — компонент для эффективного отображения длинных списков с виртуализацией.
 * Рендерит только видимые элементы и небольшой запас (overscan), что значительно снижает нагрузку на DOM.
 * Поддерживает автоматическую подгрузку данных при прокрутке к концу списка.
 *
 * @template T Тип элементов списка
 *
 * @param {object} props
 * @param {number} props.itemHeight — Фиксированная высота одного элемента списка (в пикселях).
 * @param {T[]} props.items — Массив элементов для отображения.
 * @param {() => void} props.onLoadMore — Колбэк для подгрузки новых данных, вызывается при прокрутке к концу.
 * @param {number} [props.overscan=3] — Количество дополнительных элементов, которые будут отрисованы до и после видимой области (для плавности скролла).
 * @param {(item: T, index: number, style: React.CSSProperties) => React.ReactNode} props.renderItem — Функция-рендер для элемента списка. На вход получает сам элемент, его индекс и стили для позиционирования.
 * @param {string} [props.className] — Кастомный CSS-класс для контейнера.
 * @param {React.CSSProperties} [props.style] — Кастомные стили для контейнера.
 * @param {React.HTMLAttributes<HTMLDivElement>} [rest] — Прочие стандартные пропсы div.
 *
 * @example
 * <VirtualizedList
 *   itemHeight={60}
 *   items={data}
 *   onLoadMore={fetchMore}
 *   renderItem={(item, idx, style) => (
 *     <div key={item.id} style={style}>{item.name}</div>
 *   )}
 * />
 */
interface VirtualizedListProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  itemHeight: number;
  items: T[];
  onLoadMore: () => void;
  overscan?: number;

  renderItem: (
    // eslint-disable-next-line no-unused-vars
    item: T,
    // eslint-disable-next-line no-unused-vars
    index: number,
    // eslint-disable-next-line no-unused-vars
    style: React.CSSProperties,
  ) => React.ReactNode;
}

export function VirtualizedList<T>({
  className,
  itemHeight,
  items,
  onLoadMore,
  overscan = 3,
  renderItem,
  style,
  ...rest
}: VirtualizedListProps<T>) {
  const [scrollTop, setScrollTop] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const fetching = useRef(false);

  /**
   * Высота видимой области (viewport).
   * По умолчанию 800px, если window недоступен (SSR).
   */
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800;

  const total = items.length;

  /**
   * Индекс первого и последнего видимого элемента с учетом overscan.
   */
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const endIndex = Math.min(total, Math.ceil((scrollTop + viewportHeight) / itemHeight) + overscan);

  /**
   * Массив видимых элементов для рендера.
   */
  const visibleItems = useMemo(
    () => items.slice(startIndex, endIndex),
    [items, startIndex, endIndex],
  );

  /**
   * Обработчик скролла: обновляет scrollTop и вызывает onLoadMore при необходимости.
   */
  useEffect(() => {
    const handler = () => {
      setScrollTop(window.scrollY);
      // Проверка, близко ли к концу списка для подгрузки новых данных
      const isNearBottom = window.scrollY + window.innerHeight >= (items.length - 2) * itemHeight;
      if (!fetching.current && isNearBottom) {
        fetching.current = true;
        onLoadMore();
      }
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, [items.length, itemHeight, onLoadMore]);

  /**
   * Сброс флага загрузки после обновления списка.
   */
  useEffect(() => {
    fetching.current = false;
  }, [items.length]);

  return (
    <div
      className={className}
      data-testid="container"
      ref={listRef}
      style={{
        height: total * itemHeight,
        position: 'relative',
        ...style,
      }}
      {...rest}
    >
      {visibleItems.map((item, i) =>
        renderItem(item, startIndex + i, {
          position: 'absolute',
          top: (startIndex + i) * itemHeight,
          width: '100%',
        }),
      )}
    </div>
  );
}
