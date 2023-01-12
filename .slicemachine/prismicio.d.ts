// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for BlogPost documents */
interface BlogpostDocumentData {
    /**
     * Image field in *BlogPost*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: blogpost.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Title field in *BlogPost*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: blogpost.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Publish Date field in *BlogPost*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: blogpost.publish_date
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    publish_date: prismicT.DateField;
    /**
     * Content field in *BlogPost*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blogpost.content
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
}
/**
 * BlogPost document from Prismic
 *
 * - **API ID**: `blogpost`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogpostDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<BlogpostDocumentData>, "blogpost", Lang>;
export type AllDocumentTypes = BlogpostDocument;
/**
 * Primary content in TextBlock → Primary
 *
 */
interface TextBlockSliceDefaultPrimary {
    /**
     * Title field in *TextBlock → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: text_block.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *TextBlock → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: text_block.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for TextBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TextBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextBlockSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextBlockSliceDefaultPrimary>, never>;
/**
 * Slice variation for *TextBlock*
 *
 */
type TextBlockSliceVariation = TextBlockSliceDefault;
/**
 * TextBlock Shared Slice
 *
 * - **API ID**: `text_block`
 * - **Description**: `TextBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextBlockSlice = prismicT.SharedSlice<"text_block", TextBlockSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { BlogpostDocumentData, BlogpostDocument, AllDocumentTypes, TextBlockSliceDefaultPrimary, TextBlockSliceDefault, TextBlockSliceVariation, TextBlockSlice };
    }
}