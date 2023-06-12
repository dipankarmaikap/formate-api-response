export const inputData = {
  data: {
    id: 23,
    name: 'Home',
    content_type: {
      name: 'Page',
    },
    content: [
      {
        id: 71,
        value: null,
        parent_id: 42,
        nested_content_id: 40,
        ms_block_field: {
          id: 28,
          block_id: {
            id: 12,
            name: 'Accrodion',
            block_type: 'nested_type_block',
          },
          field_id: {
            id: 1,
            name: 'Text',
          },
          display_name: 'Title',
          name: 'title',
        },
      },
      {
        id: 72,
        value: null,
        parent_id: 42,
        nested_content_id: 40,
        ms_block_field: {
          id: 30,
          block_id: {
            id: 12,
            name: 'Accrodion',
            block_type: 'nested_type_block',
          },
          field_id: {
            id: 6,
            name: 'Richtext',
          },
          display_name: 'Content',
          name: 'content',
        },
      },
      {
        id: 59,
        value: 'New Title',
        parent_id: 42,
        nested_content_id: 34,
        ms_block_field: {
          id: 28,
          block_id: {
            id: 12,
            name: 'Accrodion',
            block_type: 'nested_type_block',
          },
          field_id: {
            id: 1,
            name: 'Text',
          },
          display_name: 'Title',
          name: 'title',
        },
      },
      {
        id: 60,
        value: 'A',
        parent_id: 42,
        nested_content_id: 34,
        ms_block_field: {
          id: 30,
          block_id: {
            id: 12,
            name: 'Accrodion',
            block_type: 'nested_type_block',
          },
          field_id: {
            id: 6,
            name: 'Richtext',
          },
          display_name: 'Content',
          name: 'content',
        },
      },
      {
        id: 41,
        value: 'Welcome to My Home Test',
        parent_id: null,
        nested_content_id: null,
        ms_block_field: {
          id: 31,
          block_id: {
            id: 2,
            name: 'Page',
            block_type: 'content_type_block',
          },
          field_id: {
            id: 1,
            name: 'Text',
          },
          display_name: 'Title',
          name: 'title',
        },
      },
      {
        id: 42,
        value: null,
        parent_id: null,
        nested_content_id: null,
        ms_block_field: {
          id: 32,
          block_id: {
            id: 2,
            name: 'Page',
            block_type: 'content_type_block',
          },
          field_id: {
            id: 7,
            name: 'Special',
          },
          display_name: 'Body',
          name: 'body',
        },
      },
      {
        id: 61,
        value: 'Slider Headline',
        parent_id: 42,
        nested_content_id: 35,
        ms_block_field: {
          id: 25,
          block_id: {
            id: 4,
            name: 'Slider',
            block_type: 'nested_type_block',
          },
          field_id: {
            id: 1,
            name: 'Text',
          },
          display_name: 'Heading',
          name: 'heading',
        },
      },
      {
        id: 62,
        value: 'Slider image url',
        parent_id: 42,
        nested_content_id: 35,
        ms_block_field: {
          id: 26,
          block_id: {
            id: 4,
            name: 'Slider',
            block_type: 'nested_type_block',
          },
          field_id: {
            id: 1,
            name: 'Text',
          },
          display_name: 'Image Url',
          name: 'image_url',
        },
      },
    ],
  },
  error: null,
}
export const outputData = {
  data: {
    id: 23,
    name: 'Home',
    content_type: {
      name: 'Page',
    },
    content: {
      title: 'Welcome to My Home Test',
      body: [
        {
          id: 35,
          heading: 'Slider Headline',
          component: 'Slider',
          image_url: 'Slider image url',
        },
        {
          id: 34,
          title: 'New Title',
          component: 'Accrodion',
          content: 'A',
        },
        {
          id: 40,
          title: null,
          component: 'Accrodion',
          content: null,
        },
      ],
    },
  },
  error: null,
}
