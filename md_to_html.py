import markdown
import sys
import os
import re
from pathlib import Path
import yaml
from datetime import datetime

def extract_metadata(md_content):
    """Extract YAML metadata from the beginning of the markdown file."""
    metadata = {}
    if md_content.startswith('---'):
        parts = md_content.split('---', 2)
        if len(parts) >= 3:
            try:
                metadata = yaml.safe_load(parts[1])
                md_content = parts[2].strip()
            except yaml.YAMLError:
                print("Warning: Invalid YAML metadata")
    return metadata, md_content

def convert_md_to_html(md_file_path, output_dir=None, template_path=None):
    """
    Convert a Markdown file to HTML with LaTeX support.
    
    Args:
        md_file_path (str): Path to the Markdown file
        output_dir (str, optional): Directory to save the HTML file
        template_path (str, optional): Path to the HTML template
    """
    # Read the Markdown file
    with open(md_file_path, 'r', encoding='utf-8') as f:
        md_content = f.read()
    
    # Extract metadata
    metadata, md_content = extract_metadata(md_content)
    
    # Set default metadata
    title = metadata.get('title', Path(md_file_path).stem)
    date = metadata.get('date', datetime.now().strftime('%B %d, %Y'))
    author = metadata.get('author', 'Your Name')
    
    # Configure markdown extensions
    extensions = [
        'pymdownx.arithmatex',  # For LaTeX math support
        'pymdownx.superfences',  # For code blocks
        'pymdownx.highlight',    # For syntax highlighting
        'pymdownx.extra',        # For additional features
        'pymdownx.tilde',        # For strikethrough
        'pymdownx.tasklist',     # For task lists
        'pymdownx.emoji',        # For emoji support
    ]
    
    # Convert Markdown to HTML
    html_content = markdown.markdown(
        md_content,
        extensions=extensions,
        extension_configs={
            'pymdownx.arithmatex': {
                'generic': True,
                'preview': False
            }
        }
    )
    
    # Read template if provided
    if template_path and os.path.exists(template_path):
        with open(template_path, 'r', encoding='utf-8') as f:
            html_template = f.read()
    else:
        # Default template
        html_template = f"""<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>{title}</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <style>
        body {{
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
        }}
        pre {{
            background-color: #f5f5f5;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
        }}
        code {{
            font-family: Consolas, Monaco, 'Andale Mono', monospace;
        }}
        img {{
            max-width: 100%;
            height: auto;
        }}
    </style>
</head>
<body>
    <h1>{title}</h1>
    <div class="meta">
        <span class="date">{date}</span>
        <span class="author">By {author}</span>
    </div>
    {html_content}
</body>
</html>
"""
    
    # Replace template variables
    html_template = html_template.replace('{{ title }}', title)
    html_template = html_template.replace('{{ date }}', date)
    html_template = html_template.replace('{{ author }}', author)
    html_template = html_template.replace('{{ content }}', html_content)
    
    # Determine output path
    if output_dir:
        os.makedirs(output_dir, exist_ok=True)
        output_path = os.path.join(output_dir, f"{Path(md_file_path).stem}.html")
    else:
        output_path = f"{md_file_path.rsplit('.', 1)[0]}.html"
    
    # Write the HTML file
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html_template)
    
    print(f"Successfully converted {md_file_path} to {output_path}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python md_to_html.py <markdown_file> [output_directory] [template_path]")
        sys.exit(1)
    
    md_file = sys.argv[1]
    output_dir = sys.argv[2] if len(sys.argv) > 2 else None
    template_path = sys.argv[3] if len(sys.argv) > 3 else None
    
    convert_md_to_html(md_file, output_dir, template_path) 