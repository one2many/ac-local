export default {
    "type": "object",
    "name": "Merchandise",
    "title": "Merchandise Section",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title displayed at the top of the section (If the section does not have a title, it is used by the CMS)",
            "initialValue": "Merchandise",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "subtitle",
            "title": "Section Subtitle",
            "description": "The text displayed below the section title",
            "validation": null
        },
        {
            "type": "string",
            "name": "section_id",
            "title": "Section Id",
            "initialValue": "three",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "background_style",
            "title": "Background Style",
            "description": "The style used for the section background",
            "initialValue": "style3",
            "validation": null,
            "options": {
                "list": [
                    "style1",
                    "style2",
                    "style3",
                    "style4"
                ]
            }
        },
        {
            "type": "array",
            "name": "products",
            "title": "Products",
            "description": "Merchandise available for purchase should be listed here",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "name",
                            "title": "Product Name",
                            "validation": Rule => Rule.required()
                        },
                        {
                            "type": "markdown",
                            "name": "description",
                            "title": "Description",
                            "description": "The text displayed below the product name",
                            "validation": null
                        },
                        {
                            "type": "image",
                            "name": "home_img_path",
                            "title": "Feature image",
                            "description": "The image displayed below the product description.",
                            "validation": null
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "title"
                        }
                    }
                }
            ]
        },
        {
            "type": "string",
            "name": "component",
            "title": "Component",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "Merchandise"
                ]
            }
        },
        {
            "type": "string",
            "name": "type",
            "title": "Reference Type Name",
            "description": "Name of the Stackbit object model, used by fields of type reference",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "merchandise"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}