import { defineSchema } from "@tinacms/cli";
import type { TinaTemplate, TinaField } from "@tinacms/cli";


const socialBlockSchema: TinaTemplate = {
  name: "social",
  label: "Social Media - Detail",
  ui: {
    defaultItem: {},
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "string",
      label: "description",
      name: "description",
    },
    {
      type: "image",
      label: "Image",
      name: "socialImg",
    },
  ],
};

const verseBlockSchema: TinaTemplate = {
  name: "verseblock",
  label: "Bible Verse",
  ui: {
    defaultItem: {
      null: "You dont need to edit here",
    },
  },
  fields: [
    {
      type: "string",
      label: "Null",
      name: "null",
    },
  ],
};


const contentBlockSchema: TinaTemplate = {
  name: "content",
  label: "Content",
  ui: {
    defaultItem: {
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    },
  },
  fields: [
    {
      type: "rich-text",
      label: "Body",
      name: "body",
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};

export default defineSchema({
  collections: [
    {
      label: "Blog Posts",
      name: "posts",
      path: "content/posts",
      format: "mdx",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "image",
          name: "heroImg",
          label: "Hero Image",
        },
        {
          type: "rich-text",
          label: "Excerpt",
          name: "excerpt",
        },
        {
          type: "reference",
          label: "Author",
          name: "author",
          collections: ["authors"],
        },
        {
          type: "datetime",
          label: "Posted Date",
          name: "date",
          ui: {
            dateFormat: "MMMM DD YYYY",
            timeFormat: "hh:mm A",
          },
        },
        {
          type: "rich-text",
          label: "Body",
          name: "_body",
          templates: [
            {
              name: "DateTime",
              label: "Date & Time",
              inline: true,
              fields: [
                {
                  name: "format",
                  label: "Format",
                  type: "string",
                  options: ["utc", "iso", "local"],
                },
              ],
            },
            {
              name: "BlockQuote",
              label: "Block Quote",
              fields: [
                {
                  name: "children",
                  label: "Quote",
                  type: "rich-text",
                },
                {
                  name: "authorName",
                  label: "Author",
                  type: "string",
                },
              ],
            },
            {
              name: "NewsletterSignup",
              label: "Newsletter Sign Up",
              fields: [
                {
                  name: "children",
                  label: "CTA",
                  type: "rich-text",
                },
                {
                  name: "placeholder",
                  label: "Placeholder",
                  type: "string",
                },
                {
                  name: "buttonText",
                  label: "Button Text",
                  type: "string",
                },
                {
                  name: "disclaimer",
                  label: "Disclaimer",
                  type: "rich-text",
                },
              ],
              ui: {
                defaultItem: {
                  placeholder: "Enter your email",
                  buttonText: "Notify Me",
                },
              },
            },
          ],
          isBody: true,
        },
      ],
    },
    {
      label: "Global",
      name: "global",
      path: "content/global",
      format: "json",
      fields: [
         {
          label: "Bible Verse & Extra",
          type: "object",
          name: "extra",
          fields: [
            {
              type: "object",
              label: "Bible Verse",
              name: "verse",
              fields: [
                {
                  type: "string",
                  label: "Text",
                  name: "body",
                },
                {
                  type: "string",
                  label: "Author",
                  name: "author",
                },
              ],
            },
            {
              type: "string",
              label: "Email",
              name: "email",
            },
            {
              type: "string",
              label: "Donate",
              name: "donate",
            },
          ],
        },

        {
          type: "object",
          label: "Header",
          name: "header",
          fields: [
             {
              type: "object",
              label: "Posts Dropdown Links",
              name: "posts",
              list: true,
              ui: {
                defaultItem: {
                  href: "blog",
                  label: "Blog",
                },
              },
              fields: [
                {
                  type: "string",
                  label: "Link",
                  name: "href",
                },
                {
                  type: "string",
                  label: "Label",
                  name: "label",
                },
              ],
            },

             {
              type: "object",
              label: "About Dropdown Links",
              name: "nav",
              list: true,
              ui: {
                defaultItem: {
                  href: "home",
                  label: "Home",
                },
              },
              fields: [
                {
                  type: "string",
                  label: "Link",
                  name: "href",
                },
                {
                  type: "string",
                  label: "Label",
                  name: "label",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          label: "Footer",
          name: "footer",
          fields: [
             {
              type: "object",
              label: "Social Links",
              name: "social",
              fields: [
                     {
                  type: "string",
                  label: "Facebook",
                  name: "facebook",
                },
                {
                  type: "string",
                  label: "Twitter",
                  name: "twitter",
                },
                {
                  type: "string",
                  label: "Instagram",
                  name: "instagram",
                },
                {
                  type: "string",
                  label: "Pinterest",
                  name: "pinterest",
                },
                {
                  type: "string",
                  label: "Gmail",
                  name: "gmail",
                },

                {
                  type: "string",
                  label: "Github",
                  name: "github",
                },

              ],
            },
          ],
        },
        {
          type: "object",
          label: "Theme",
          name: "theme",
          fields: [
             {
              type: "string",
              name: "darkMode",
              label: "Dark Mode",
              options: [
                {
                  label: "System",
                  value: "system",
                },
                {
                  label: "Light",
                  value: "light",
                },
                {
                  label: "Dark",
                  value: "dark",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Authors",
      name: "authors",
      path: "content/authors",
      fields: [
        {
          type: "string",
          label: "Name",
          name: "name",
        },
        {
          type: "string",
          label: "Avatar",
          name: "avatar",
        },
      ],
    },
    {
      label: "Pages",
      name: "pages",
      path: "content/pages",
      fields: [
        {
          type: "object",
          list: true,
          name: "blocks",
          label: "Sections",
          templates: [
            socialBlockSchema,
            verseBlockSchema,
            contentBlockSchema,
          ],
        },
      ],
    },
  ],
});
