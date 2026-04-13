# 210 Jazz Orchestra Site

## Making updates

Updating events on the site should be done through [Bandsintown](https://artists.bandsintown.com/artists/15570638/events/upcoming). Updates there will automatically update on the site as well.

Everything else is updated via the contents.json file:

- Bio
- Band members
- Press quotes
- Youtube URLs
- Social Media Accounts

### Editing contents.json

To edit the contents.json file, [click here](https://github.com/210jazzorchestra/website/edit/main/src/app/content.json).

You should change the text **in between** the quotation marks, and only change the text on the right side of a colon.
For example, if I wanted to update the saxophonists:

Original

```
 "saxophones": "John Doe, Jane Doe, Jim Doe, Jill Doe",
```

Edited

```
 "saxophones": "Mario, Luigi, Peach, Toad, Donkey Kong",
```

## Editing images

There are two spots for images on the site:

- The image carousel at the top
- The bio photo in the "About Us" section

The easiest way to edit these is going to be going to [this page](https://github.dev/210jazzorchestra/website/blob/main/src/assets). Then drag and drop the photos into the carousel folder. If you want to edit the bio photo, just drag and drop the photo into the `bio-photo` folder. If you want to delete a photo, just right click the file and select `Delete Permanently`.

When you are done, to save your changes, go to the third icon down on the left side (the three dots connected by lines). Type in something like "uploaded images" in the message box, and then click the button that says "Commit & Push".

### If you want to avoid breaking anything, follow these rules:

- **Do not** change the text on the left side of a colon. In the above example, you should not change `"saxophones"` to `"saxophonists"`.
  - `"` quotation marks
    - also don't add quotes within quotes, i.e. "The dog went "woof""
  - `,` commas
    - okay within quotation marks
  - `:` colons
    - okay within quotation marks
  - `{` `}` curly brackets

### If you want to avoid breaking anything, follow these rules:

- **Do not** change the text on the left side of a colon. In the above example, you should not change `"saxophones"` to `"saxophonists"`.
- **Do not** delete, move, or add any...
  - `"` quotation marks
    - also don't add quotes within quotes, i.e. "The dog went "woof""
  - `,` commas
    - okay within quotation marks
  - `:` colons
    - okay within quotation marks
  - `{` `}` curly brackets

### Save your changes

Once you have made your updates click the `Commit Changes...` button in the top right. Describe the change you made in the commit message (i.e. updated youtube links, updated bio), and then click `Commit Changes.` You don't need to add an extended description, and you should choose the default option of committing directly to the `main` branch.

Then after about a minute, your changes should be reflected on the site.

### Issues

If you run into any trouble or have any questions, just complain at Zac.
