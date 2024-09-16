const homepage = {
  name: "homepage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      readOnly: true,
    },
    {
      name: "video",
      title: "Video",
      type: "file",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "localePortableString",
    },
  ],
};

export default homepage;
