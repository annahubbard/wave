---
title: Custom CSS
---

Wave tries to handle all the styling for you to both save you time and provide the most optimal user experience. However, there might be cases, when you are not 100% happy with it:

* You feel like some components are hard to use and you have some ideas about improvement. In this case, please don't hesitate to [file a new feature request](https://github.com/h2oai/wave/issues/new?assignees=&labels=feature&template=feature_request.md&title=) where we can further discuss and improve Wave for everybody.
* You do not like alignment or some particular color - subjective case for which you need to use custom CSS.

:::info
It's recommended to keep CSS changes at minimum (ideally at 0) since the CSS selectors that you will need to use are not guaranteed to work across Wave updates. The HTML code in Wave is considered an "implementation detail" and is prone to change in order to deliver new features and bugfixes.
:::

## Loading external stylesheets

If the stylesheet you want to use is hosted somewhere, e.g. CDN, you need to use the `stylesheets` attribute. This is also handy for cases when you wish to load a well-known CSS lib like `Bootstrap` and use it within your `ui.markup_card` for example.

```py
q.page['meta'] = ui.meta_card(
    box='',
    stylesheets=[
      ui.stylesheet('https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css')
    ]
)
```

## Inline stylesheets

On the other hand, if all you want to do is tweak a few things here and there, the simpler solution would be to use the `stylesheet` attribute that accepts a CSS string.

```py
# Use red colors for text in all paragraphs.
style = '''
p {
  color: red;
}
'''

page['meta'] = ui.meta_card(box='', stylesheet=ui.inline_stylesheet(style))
```

## Targetting the desired element

CSS class names are autogenerated by our build tooling which makes them inappropriate for CSS selectors - they change with every build (new version) of Wave. Instead, you can notice there are `data-test` attributes all over the HTML markup. These are filled based on either card name (`q.page['<card-name>']`) or on the `name` attribute in case of components. It's recommended to use the `data-test` attributes where possible instead.

Below, you can find a simple example on how to change the alignment of header title and subtitle.

```py
from h2o_wave import main, app, Q, ui


@app('/')
async def serve(q: Q):
    # Use "my_header" as card name.
    q.page['my_header'] = ui.header_card(box='1 1 -1 1', title='Title', subtitle='Subtitle')
    # Target all divs with data-test attribute that have value of "my_header",
    # then target it's first immediate child div.
    q.page['meta'] = ui.meta_card(box='', stylesheet=ui.inline_stylesheet('''
div[data-test="my_header"]>div {
  flex-grow: 1;
  justify-content: center;
}
'''))

    await q.page.save()
```