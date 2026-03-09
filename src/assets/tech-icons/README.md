# Technology Icons

Supports three icon sources (priority: icon > image > deviconClass):
1. **Devicon** – Set `deviconClass` (e.g., `"devicon-docker-plain colored"`)
2. **Custom SVG component** – Create a React component and set `icon`
3. **Image file** – Import PNG/SVG/WebP and set `image`

## Adding a custom SVG icon

1. Create a new `.tsx` file in this folder (e.g., `MyTech.tsx`):

```tsx
import React from "react";

const MyTech: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 20}
    height={props.height || 20}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    {/* Paste your SVG path elements here */}
  </svg>
);

export default MyTech;
```

2. Import it in `src/data/tech-icons.ts` and add an entry:

```ts
import MyTech from "@/assets/tech-icons/MyTech";

// In techIcons:
MyTech: { name: "My Tech", icon: MyTech },
```

**Tip:** Use `fill="currentColor"` so the icon inherits text color.

## Using an image file (PNG, WebP, etc.)

1. Add your image to `src/assets/tech-icons/` (e.g., `mytech.png`)
2. In `src/data/tech-icons.ts`:

```ts
import mytechIcon from "@/assets/tech-icons/mytech.png";

MyTech: { name: "My Tech", image: mytechIcon },
```

Or use a URL string: `image: "https://example.com/icon.png"`
