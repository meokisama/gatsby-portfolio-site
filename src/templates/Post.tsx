import { graphql } from 'gatsby';
import React from 'react';

import { Layout } from '~/components/Layout';
import { BlogPost } from '~/components/organisms/BlogPost';

export interface Props {
  data: {
    markdownRemark: {
      fields: {
        /** How long it'll take to finish the article. */
        readingTime: {
          text: string;
        };
      };

      frontmatter: {
        /** The post date. */
        date: string;
        /** A list of tags for the article i.e. related topics. */
        tags: string[];
        /** The title of the blog post. */
        title: string;
        /** The unique slug/url of the blog post. */
        slug: string;
      };
      /** The blog post as a HTML string. */
      html: string;
      /** The first 160 chars. */
      excerpt: string;
    };
  };
}

export default function BlogPostTemplate({ data }: Props) {
  const { markdownRemark } = data;
  const { fields, frontmatter, html, excerpt } = markdownRemark;

  return (
    <Layout
      description={excerpt}
      keywords={frontmatter.tags}
      pathname={`/blog/${frontmatter.slug}`}
      title={frontmatter.title}
    >
      <BlogPost
        data={html}
        date={frontmatter.date}
        readingTime={fields.readingTime.text}
        slug={frontmatter.slug}
        tags={frontmatter.tags}
        title={frontmatter.title}
      />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        slug
        title
        tags
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`;
