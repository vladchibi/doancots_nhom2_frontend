# Skeleton Loading System Documentation

## Overview

The skeleton loading system provides consistent, professional loading states throughout the application. It includes specialized skeletons for different content types and common UI patterns.

## Features

- ✅ **Consistent Design** - Unified skeleton styling across all components
- ✅ **Dark Mode Support** - Automatic theme adaptation
- ✅ **Responsive Design** - Mobile-friendly layouts
- ✅ **Customizable** - Flexible props for different use cases
- ✅ **Performance Optimized** - Lightweight and efficient
- ✅ **TypeScript Support** - Full type safety

## File Structure

```
src/components/skeletons/
├── index.ts                 # Export all skeletons
├── HomeSkeleton.tsx         # Home page specific skeletons
├── MovieSkeleton.tsx        # Movie-related skeletons
├── ArticleSkeleton.tsx      # Article-related skeletons
└── CommonSkeleton.tsx       # Generic reusable skeletons
```

## Usage Examples

### 1. Home Page Loading

```tsx
import { HomeSkeleton } from '@/components/skeletons';

export default function HomeClient() {
  const { data, isLoading } = useSWR('/api/movies');
  
  if (isLoading) return <HomeSkeleton />;
  
  return <HomePage data={data} />;
}
```

### 2. Movie Grid Loading

```tsx
import { MovieGridSkeleton } from '@/components/skeletons';

export default function MoviesPage() {
  const { data, isLoading } = useSWR('/api/movies');
  
  return (
    <div>
      {isLoading ? (
        <MovieGridSkeleton 
          count={10} 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
        />
      ) : (
        <MovieGrid movies={data} />
      )}
    </div>
  );
}
```

### 3. Article Section Loading

```tsx
import { ArticleSectionSkeleton } from '@/components/skeletons';

export default function ArticlesSection() {
  const { data, isLoading } = useSWR('/api/articles');
  
  if (isLoading) {
    return <ArticleSectionSkeleton count={6} layout="grid" />;
  }
  
  return <ArticleGrid articles={data} />;
}
```

### 4. Custom Form Loading

```tsx
import { FormSkeleton, CardSkeleton } from '@/components/skeletons';

export default function CheckoutForm() {
  const [isLoading, setIsLoading] = useState(true);
  
  if (isLoading) {
    return (
      <CardSkeleton className="max-w-md mx-auto">
        <FormSkeleton fields={5} />
      </CardSkeleton>
    );
  }
  
  return <CheckoutForm />;
}
```

## Component Reference

### Home Page Skeletons

#### `HomeSkeleton`
Complete home page skeleton with all sections.

```tsx
<HomeSkeleton />
```

#### `HeroSkeleton`
Hero section with background and content placeholders.

#### `SearchFilterSkeleton`
Search bar and filter controls skeleton.

#### `MovieTabsSkeleton`
Movie tabs with grid layout skeleton.

### Movie Skeletons

#### `MovieCardSkeleton`
Single movie card skeleton.

```tsx
<MovieCardSkeleton 
  showRating={true} 
  showGenres={true} 
/>
```

#### `MovieGridSkeleton`
Grid of movie cards skeleton.

```tsx
<MovieGridSkeleton 
  count={10}
  className="grid grid-cols-1 md:grid-cols-3 gap-6"
  showRating={true}
  showGenres={true}
/>
```

#### `MovieListSkeleton`
Horizontal movie list skeleton.

```tsx
<MovieListSkeleton count={5} />
```

#### `FeaturedMovieSkeleton`
Large featured movie card skeleton.

#### `MovieCarouselSkeleton`
Horizontal scrolling movie carousel skeleton.

```tsx
<MovieCarouselSkeleton count={6} />
```

### Article Skeletons

#### `ArticleCardSkeleton`
Single article card skeleton.

```tsx
<ArticleCardSkeleton 
  showImage={true} 
  layout="grid" 
/>
```

#### `ArticleGridSkeleton`
Grid of article cards skeleton.

```tsx
<ArticleGridSkeleton 
  count={6}
  layout="grid"
  showImage={true}
/>
```

#### `FeaturedArticleSkeleton`
Large featured article skeleton.

#### `ArticleSectionSkeleton`
Complete article section with title.

```tsx
<ArticleSectionSkeleton 
  title={true}
  count={6}
  layout="grid"
/>
```

### Common Skeletons

#### `SectionTitleSkeleton`
Section title placeholder.

```tsx
<SectionTitleSkeleton width="w-48" />
```

#### `ButtonSkeleton`
Button placeholder.

```tsx
<ButtonSkeleton width="w-32" height="h-10" />
```

#### `InputSkeleton`
Input field placeholder.

```tsx
<InputSkeleton width="w-full" />
```

#### `CardSkeleton`
Generic card container.

```tsx
<CardSkeleton 
  className="bg-white dark:bg-gray-800 rounded-xl"
  padding="p-6"
>
  <TextLineSkeleton width="w-3/4" />
  <TextLineSkeleton width="w-1/2" />
</CardSkeleton>
```

#### `ImageSkeleton`
Image placeholder.

```tsx
<ImageSkeleton 
  aspectRatio="aspect-video" 
  className="rounded-lg" 
/>
```

#### `TextLineSkeleton`
Text line placeholder.

```tsx
<TextLineSkeleton 
  width="w-full" 
  height="h-4"
  className="mb-2"
/>
```

#### `TableSkeleton`
Table with rows and columns.

```tsx
<TableSkeleton rows={5} columns={4} />
```

#### `FormSkeleton`
Form with multiple fields.

```tsx
<FormSkeleton fields={4} />
```

## Styling Guidelines

### Colors
- **Light Mode**: `bg-gray-200` for skeleton elements
- **Dark Mode**: `bg-gray-700` for skeleton elements
- **Animation**: `animate-pulse` for loading effect

### Spacing
- **Consistent margins**: Use `mb-2`, `mb-4`, `mb-6` for spacing
- **Grid gaps**: Use `gap-4`, `gap-6` for grid layouts
- **Padding**: Use `p-4`, `p-6` for card padding

### Responsive Design
- **Mobile First**: Start with single column layouts
- **Breakpoints**: Use `md:`, `lg:`, `xl:` for larger screens
- **Flexible Grids**: Adjust column counts based on screen size

## Best Practices

### 1. Match Content Structure
Skeleton should mirror the actual content layout:

```tsx
// Good: Matches actual movie card structure
<MovieCardSkeleton showRating={true} showGenres={true} />

// Bad: Generic skeleton that doesn't match content
<div className="h-64 bg-gray-200 animate-pulse" />
```

### 2. Use Appropriate Counts
Match skeleton count to expected content:

```tsx
// Good: Shows expected number of items
<MovieGridSkeleton count={data?.meta?.limitNumber || 10} />

// Bad: Fixed count that doesn't match data
<MovieGridSkeleton count={5} />
```

### 3. Consistent Timing
Show skeletons for minimum duration to avoid flashing:

```tsx
const [showSkeleton, setShowSkeleton] = useState(true);

useEffect(() => {
  if (data && !isLoading) {
    // Minimum 300ms to avoid flash
    setTimeout(() => setShowSkeleton(false), 300);
  }
}, [data, isLoading]);
```

### 4. Progressive Loading
Show skeletons for individual sections:

```tsx
<div>
  <HeroSection data={heroData} />
  
  {moviesLoading ? (
    <MovieGridSkeleton count={10} />
  ) : (
    <MovieGrid movies={moviesData} />
  )}
  
  {articlesLoading ? (
    <ArticleSectionSkeleton count={6} />
  ) : (
    <ArticleSection articles={articlesData} />
  )}
</div>
```

## Performance Considerations

### 1. Lightweight Components
- Use simple div elements with CSS classes
- Avoid complex animations or JavaScript
- Minimize DOM nodes

### 2. CSS-Only Animations
- Use `animate-pulse` utility class
- Avoid JavaScript-based animations
- Leverage CSS transforms for performance

### 3. Conditional Rendering
- Only render skeletons when actually loading
- Remove skeletons from DOM when not needed
- Use React.memo for static skeletons

## Accessibility

### 1. Screen Reader Support
```tsx
<div 
  className="skeleton-element"
  aria-label="Loading content"
  role="status"
>
  <span className="sr-only">Loading...</span>
</div>
```

### 2. Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  .animate-pulse {
    animation: none;
  }
}
```

## Future Enhancements

### Planned Features
- [ ] Shimmer animation option
- [ ] Custom animation speeds
- [ ] Skeleton themes
- [ ] Auto-generated skeletons
- [ ] Performance monitoring
- [ ] A/B testing support

### Advanced Patterns
- [ ] Skeleton composition system
- [ ] Dynamic skeleton generation
- [ ] Skeleton caching
- [ ] Progressive enhancement
- [ ] Skeleton analytics
