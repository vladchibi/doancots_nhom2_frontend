# Pagination Component Documentation

## Overview

The Pagination component provides a complete pagination solution with optional URL synchronization, making it easy to implement server-side pagination across your application.

## Features

- ✅ **URL Synchronization** - Automatically sync pagination state with browser URL
- ✅ **Limit Selector** - Allow users to change items per page
- ✅ **Responsive Design** - Mobile-friendly layout
- ✅ **Dark Mode Support** - Automatic theme adaptation
- ✅ **TypeScript Support** - Full type safety
- ✅ **Customizable** - Flexible styling and behavior options

## Basic Usage

### Simple Pagination (No URL Sync)

```tsx
import Pagination, { PaginationMeta } from '@/components/ui/Pagination';

const meta: PaginationMeta = {
  total: 100,
  pageNumber: 1,
  limitNumber: 10,
  totalPages: 10,
};

<Pagination
  meta={meta}
  currentPage={currentPage}
  onPageChange={setCurrentPage}
  onLimitChange={setLimit}
  showLimitSelector={true}
  limitOptions={[5, 10, 20, 50]}
/>
```

### Pagination with URL Sync

```tsx
<Pagination
  meta={meta}
  currentPage={currentPage}
  onPageChange={handlePageChange}
  onLimitChange={handleLimitChange}
  showLimitSelector={true}
  limitOptions={[5, 10, 20, 50]}
  syncWithURL={true}
  basePath="/movies"
  preserveParams={['search', 'genres', 'tab']}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `meta` | `PaginationMeta` | Required | Pagination metadata from API |
| `currentPage` | `number` | Required | Current active page |
| `onPageChange` | `(page: number) => void` | Required | Page change callback |
| `onLimitChange` | `(limit: number) => void` | Optional | Limit change callback |
| `showLimitSelector` | `boolean` | `true` | Show/hide limit selector |
| `limitOptions` | `number[]` | `[5, 10, 20, 50]` | Available limit options |
| `maxVisiblePages` | `number` | `5` | Max page numbers to show |
| `className` | `string` | `''` | Additional CSS classes |
| `syncWithURL` | `boolean` | `false` | Enable URL synchronization |
| `basePath` | `string` | `''` | Base path for URL (e.g., '/movies') |
| `preserveParams` | `string[]` | `[]` | URL params to preserve |

## PaginationMeta Interface

```tsx
interface PaginationMeta {
  total: number;        // Total number of items
  pageNumber: number;   // Current page number
  limitNumber: number;  // Items per page
  totalPages: number;   // Total number of pages
}
```

## URL Synchronization

When `syncWithURL` is enabled, the component will:

1. **Read initial state** from URL parameters (`page`, `limit`)
2. **Update URL** when pagination state changes
3. **Preserve other parameters** specified in `preserveParams`
4. **Handle browser navigation** (back/forward buttons)

### URL Examples

```
/movies?page=1&limit=10
/movies?page=2&limit=5&search=avengers
/articles?page=1&limit=20&categoryId=1&search=news
```

## Using with usePaginationURL Hook

For more complex scenarios, use the `usePaginationURL` hook:

```tsx
import { usePaginationURL } from '@/hooks/usePaginationURL';

const {
  currentPage,
  limit,
  setCurrentPage,
  setLimit,
  updateURL,
} = usePaginationURL({
  basePath: '/movies',
  initialPage: 1,
  initialLimit: 10,
  preserveParams: ['search', 'genres'],
});

// Update other filters
const handleSearchChange = (search: string) => {
  setSearchTerm(search);
  setCurrentPage(1); // Reset to page 1
  updateURL({ search, page: 1 });
};
```

## Integration Examples

### Movies Page

```tsx
<Pagination
  meta={meta}
  currentPage={currentPage}
  onPageChange={handlePageChange}
  onLimitChange={handleLimitChange}
  syncWithURL={true}
  basePath="/movies"
  preserveParams={['search', 'genres', 'tab']}
/>
```

### Articles Page

```tsx
<Pagination
  meta={meta}
  currentPage={currentPage}
  onPageChange={setCurrentPage}
  onLimitChange={setLimit}
  syncWithURL={true}
  basePath="/articles"
  preserveParams={['search', 'categoryId']}
/>
```

## API Response Format

Your API should return data in this format:

```json
{
  "data": [...],
  "meta": {
    "total": 100,
    "pageNumber": 1,
    "limitNumber": 10,
    "totalPages": 10
  }
}
```

## Styling

The component uses Tailwind CSS classes and supports dark mode automatically. You can customize the appearance by:

1. **Adding custom classes** via the `className` prop
2. **Overriding CSS** in your global styles
3. **Modifying the component** directly for complex customizations

## Best Practices

1. **Always use URL sync** for main content pages (movies, articles, etc.)
2. **Preserve relevant parameters** (search, filters) in `preserveParams`
3. **Reset to page 1** when filters change
4. **Use appropriate limit options** based on your content type
5. **Handle loading states** while fetching data
6. **Show skeleton loaders** during pagination transitions
