# Markdown Blog Generator

A simple and elegant blog generator that converts Markdown files into a beautiful HTML website. Features include LaTeX math support, syntax highlighting, and a modern responsive design.

## Features

- 🎨 Modern, responsive design
- ✍️ Write posts in Markdown
- 📐 LaTeX math expressions support
- 🎯 Syntax highlighting for code blocks
- 📱 Mobile-friendly
- 🏷️ Tag support for posts
- 📂 Category organization
- 🖼️ Image optimization

## Project Structure

```
blog/
├── src/
│   ├── assets/         # Images, fonts, and other static files
│   ├── posts/          # Your markdown blog posts
│   │   ├── tech/      # Technology-related posts
│   │   ├── personal/  # Personal blog posts
│   │   └── tutorials/ # Tutorial posts
│   ├── templates/     # HTML templates
│   ├── styles/        # CSS files
│   └── scripts/       # JavaScript files
├── public/            # Generated HTML files
├── md_to_html.py     # Markdown to HTML converter
└── requirements.txt   # Python dependencies
```

## Getting Started

1. **Install Dependencies**

```bash
pip install -r requirements.txt
```

2. **Create a New Post**

Create a new Markdown file in the appropriate category folder under `src/posts/` with the following format:

```markdown
---
title: Your Post Title
date: YYYY-MM-DD
author: Your Name
tags: [tag1, tag2]
category: tech
---

Your content here...
```

3. **Convert Posts to HTML**

```bash
# Convert a single post
python md_to_html.py src/posts/tech/your-post.md public/blog templates/blog_post.html

# Convert all posts
python md_to_html.py --all src/posts public/blog
```

4. **Run the Blog Locally**

You can use Python's built-in HTTP server to test your blog:

```bash
python -m http.server
```

Then visit `http://localhost:8000` in your browser.

## Writing Posts

### Markdown Features

- **Headers**: Use `#` for h1, `##` for h2, etc.
- **Lists**: Use `-` or `*` for unordered lists, numbers for ordered lists
- **Code**: Use \`\`\` for code blocks, \` for inline code
- **Links**: `[text](url)`
- **Images**: `![alt](image-url)`
- **LaTeX**: Use `\(` and `\)` for inline math, `\[` and `\]` for display math

### Example

\`\`\`markdown
---
title: Getting Started with Python
date: 2024-03-20
author: Your Name
tags: [python, programming, tutorial]
category: tutorials
---

# Getting Started with Python

Here's a simple Python function:

```python
def hello_world():
    print("Hello, World!")
```

And here's some math:

\[
E = mc^2
\]
\`\`\`

## Customization

### Styling

The blog uses CSS variables for easy customization. Edit `src/styles/style.css` to change colors, fonts, etc:

```css
:root {
    --primary-color: #2d3436;
    --secondary-color: #0984e3;
    /* ... other variables ... */
}
```

### Templates

Customize the HTML templates in `src/templates/` to change the layout and structure of your blog.

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this project for your own blog! 