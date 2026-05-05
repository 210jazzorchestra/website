# 210 Jazz Orchestra Site

## Making updates

Updating events on the site should be done through [Bandsintown](https://artists.bandsintown.com/artists/15570638/events/upcoming). Updates there will automatically update on the site as well.

Everything else is updated in **one file** on GitHub (it is named **`content.json`**):

- Bio
- Band members
- Press quotes
- Youtube URLs
- Social Media Accounts
- Announcements
- Whether the site follows light or dark mode

### Editing the content file

Open the file here: [Edit `content.json` on GitHub](https://github.com/210jazzorchestra/website/edit/main/src/app/content.json).

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

### Light mode and dark mode

Near the top of **`content.json`** you will see two lines that control how the site looks. **Only change the words after the colon** (inside the quotes), same as everywhere else in the file.

**1. `followSystemTheme`**

- Use **`true`** if you want the website to **automatically match each person’s phone or computer** (when their device is set to light mode or dark mode, the site follows that). This is usually what you want.
- Use **`false`** if you want the website to **look the same for everyone**, no matter how their device is set. If you choose this, use line 2 below to pick light or dark.

**2. `defaultAppearance`**

This line **only matters when `followSystemTheme` is `false`**.

- Use **`"light"`** if everyone should always see the **light** (bright) version of the site.
- Use **`"default"`** or **`"dark"`** if everyone should always see the **dark** version.

If `followSystemTheme` is **`true`**, you can leave `defaultAppearance` as it is—it does not change what people see.

#### Examples you can copy

Match each visitor’s device (recommended):

```json
"followSystemTheme": true,
"defaultAppearance": "default"
```

Always use the dark style for every visitor:

```json
"followSystemTheme": false,
"defaultAppearance": "default"
```

Always use the light style for every visitor:

```json
"followSystemTheme": false,
"defaultAppearance": "light"
```

**Primary, secondary, and background colors**  
Those exact colors are **not** edited in `content.json`. They live in a code file named **`src/app/globals.css`**. If you want different brand colors, whoever maintains the site can change the values there (they look like `#121212`, `#fec76f`, and so on).

**Heads-up about experiminting with colors**  
Every time `globals.css` is saved and pushed to GitHub, **Vercel usually runs a new build** of the site before the change goes live. That is normal.  
If you tweak colors **many times in a row**, each push can trigger another build. On some Vercel plans, **too many builds in a billing period can add cost** or use up included build minutes.  
So it is best to **settle on colors in a small number of edits** (for example, try ideas locally or in a draft first) instead of changing `globals.css` over and over every few minutes.

### Editing announcements

Find `"announcements"` in `content.json`. Each announcement should look like this:

```json
{
  "title": "Tickets",
  "text": "Tickets for our next show are on [Bandsintown](https://www.bandsintown.com/...)."
}
```

What to edit:

- Change the words on the right side only (inside quotes).
- Keep all punctuation exactly as-is (`"`, `:`, `,`, `{`, `}`).
- You can use just `title`, just `text`, or both.
- If both `title` and `text` are empty, that announcement will not show on the site.

How to add a link in a sentence:

- Use this format: `[Link words people click](https://full-link-goes-here.com)`
- Example: `"text": "See details on [Instagram](https://instagram.com/210_jazz_orchestra)."`

How to add another announcement:

- Copy an existing announcement block and paste it below.
- Put a comma after the closing `}` of each announcement, except the last one.

Example with two announcements:

```json
"announcements": [
  {
    "title": "Next Show",
    "text": "Join us Friday at Blue Star Brewery."
  },
  {
    "title": "Tickets",
    "text": "Buy tickets on [Bandsintown](https://www.bandsintown.com/...)."
  }
]
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
