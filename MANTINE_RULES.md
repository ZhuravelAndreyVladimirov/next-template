# Правила использования библиотеки Mantine

## Общие принципы

Данный документ описывает правила работы с библиотекой Mantine в проекте.

## 1. Настройка UI компонентов

Настройка UI компонентов библиотеки Mantine происходит в директории `src/extends`.

Каждый компонент должен быть расширен через метод `.extend()` и экспортирован с префиксом `Ui` (например, `UiButton`, `UiContainer`).

**Пример:**

```typescript
// src/extends/Button/Button.ts
import { Button } from '@mantine/core';
import styles from './Button.module.scss';

export const UiButton = Button.extend({
  classNames() {
    return { root: styles.root };
  },
});
```

## 2. Подключение настроек в MantineProvider

Расширенные компоненты из `src/extends` подключаются в `MantineProvider` через свойство `components` в объекте `theme`.

**Пример:**

```typescript
// src/providers/CustomMantineProvider.tsx
import { UiButton } from '@/extends/Button';
import { UiContainer } from '@/extends/Container';

const theme = createTheme({
  components: {
    Button: UiButton,
    Container: UiContainer,
    // ... другие компоненты
  },
});
```

## 3. Импорт компонентов в проекте

В проекте компоненты **всегда** импортируются из `@mantine/core`, а не из `src/extends`.

**Правильно:**

```typescript
import { Button, Container, Text } from '@mantine/core';
```

**Неправильно:**

```typescript
import { UiButton } from '@/extends/Button';
import { Button } from '@/extends/Button/Button';
```

После подключения расширенных компонентов в `MantineProvider`, все импорты из `@mantine/core` автоматически будут использовать настроенные версии компонентов.

## 4. Расширение типов

При необходимости типы компонентов Mantine расширяются в файле `mantine.d.ts` в корне проекта.

**Пример:**

```typescript
// mantine.d.ts
declare module '@mantine/core' {
  export interface ButtonProps extends Omit<ButtonProps, 'variant'> {
    variant?: 'white' | 'light';
  }
}
```

## Структура файлов

```
project-root/
├── mantine.d.ts              # Расширение типов
├── src/
│   ├── extends/             # Настройка компонентов
│   │   ├── Button/
│   │   │   ├── Button.ts
│   │   │   ├── Button.module.scss
│   │   │   └── index.ts
│   │   └── ...
│   └── providers/
│       └── CustomMantineProvider.tsx  # Подключение настроек
```

## Важные замечания

- ❌ **Никогда** не импортируйте компоненты напрямую из `src/extends` в коде приложения
- ✅ Всегда используйте импорты из `@mantine/core`
- ✅ Расширенные компоненты подключаются только в `MantineProvider`
- ✅ Для кастомизации стилей используйте `.extend()` в файлах `src/extends`
- ✅ Для расширения типов используйте `mantine.d.ts`
