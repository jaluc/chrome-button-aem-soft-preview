# Devnotes

## User Story
As an **AEM author** i want to be able to:
+ Quickly open the page I am working on in a new Incognito window;
+ The Content Finder `/#cf` part of the page should be removed;
+ The `?wcmmode=disabled` parameter should be added to the page's URL.

## Mandatory features
+ Button becomes active only if the page's url is at least `https://pl-aem6.upc.biz/cf#/content/www30-upc-pl/pl/`
+ All non-essential parts of the URL shoul be stripped before appending the `wcmmode` parameter.
+ `cf#` is removed.
+ `wcmmode=disabled` is appended.
+ new incognito window opens with such reformated URL


## Nice-to-have features
+ The newly opened preview window auto-reloads (as if F5), WHEN?