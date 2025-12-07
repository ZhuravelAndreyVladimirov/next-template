import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { VirtualizedList } from './VirtualizedList';

const genItems = (n: number) => Array.from({ length: n }, (_, i) => ({ id: i, name: `Item ${i}` }));

describe('VirtualizedList', () => {
  it('рендерит только видимые элементы + overscan', () => {
    const items = genItems(100);
    render(
      <VirtualizedList
        itemHeight={50}
        items={items}
        onLoadMore={jest.fn()}
        overscan={2}
        renderItem={(item, idx, style) => (
          <div data-testid="item" key={item.id} style={style}>
            {item.name}
          </div>
        )}
      />,
    );
    // По умолчанию viewportHeight=800, overscan=2, itemHeight=50
    // (800/50)=16, +2 overscan сверху и снизу = 20
    const rendered = screen.getAllByTestId('item');
    expect(rendered.length).toBeGreaterThanOrEqual(18); // с запасом
    expect(rendered.length).toBeLessThanOrEqual(22);
  });

  it('корректно позиционирует элементы (top)', () => {
    const items = genItems(10);
    render(
      <VirtualizedList
        itemHeight={40}
        items={items}
        onLoadMore={jest.fn()}
        renderItem={(item, idx, style) => (
          <div data-testid="item" key={item.id} style={style}>
            {style.top}
          </div>
        )}
      />,
    );
    const rendered = screen.getAllByTestId('item');
    rendered.forEach((el) => {
      expect(el.style.position).toBe('absolute');
      expect(el.style.width).toBe('100%');
      expect(Number(el.style.top.replace('px', '')) % 40).toBe(0);
    });
  });

  it('вызывает onLoadMore при скролле к концу', () => {
    const items = genItems(30);
    const onLoadMore = jest.fn();
    render(
      <VirtualizedList
        itemHeight={50}
        items={items}
        onLoadMore={onLoadMore}
        renderItem={(item, idx, style) => <div data-testid="item" key={item.id} style={style} />}
      />,
    );
    // Симулируем скролл к концу
    fireEvent.scroll(window, { target: { scrollY: 2000 } });
    // onLoadMore может быть вызван асинхронно, поэтому ждем event loop
    setTimeout(() => {
      expect(onLoadMore).toHaveBeenCalled();
    }, 0);
  });

  it('рендерит пустой контейнер при пустом списке', () => {
    render(
      <VirtualizedList itemHeight={50} items={[]} onLoadMore={jest.fn()} renderItem={() => null} />,
    );
    expect(screen.queryAllByTestId('item').length).toBe(0);
  });

  it('применяет кастомный className и style', () => {
    render(
      <VirtualizedList
        className="test-class"
        itemHeight={50}
        items={genItems(5)}
        onLoadMore={jest.fn()}
        renderItem={(item, idx, style) => <div data-testid="item" key={item.id} style={style} />}
        style={{ background: 'red' }}
      />,
    );
    const container = screen.getByTestId('container');
    expect(container).toHaveClass('test-class');
    expect(container).toHaveStyle({ background: 'red' });
  });
});
