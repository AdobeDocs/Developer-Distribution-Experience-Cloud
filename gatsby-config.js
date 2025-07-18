/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  pathPrefix:
    process.env.PATH_PREFIX || "/developer-distribution/experience-cloud/docs/",
  siteMetadata: {
    pages: [
      {
        path: "/developer-distribution/",
        title: "Developer Distribution",
      },
      {
        path: "guides/index.md",
        title: "Documentation",
      },
    ],
    subPages: [
      {
        path: "guides/index.md",
        title: "Developer Distribution",
        pages: [          
          {
            path: "guides/getting-started.md",
            title: "Getting Started",
          },          
          {          
            path: "guides/zxp/distribution.md",
            title: "What's new",
          },
          {
            title: "Submission",
            path: "guides/submission/overview.md",
            pages: [
              {
                path: "guides/submission/app-builder-submission.md",
                title: "App Builder apps",
              },
              {
                path: "guides/submission/catalog-listing-submission.md",
                title: "Catalog Listings",
              },
              {
                path: "guides/submission/server-to-server-submission.md",
                title: "S2S Integrations",
              },
            ],
          },
          {
            path: "guides/branding-guidelines.md",
            title: "Adobe Branding Guidelines",
          },
          {
            path: "guides/discoverandmanage.md",
            title: "Discover and Manage",
          },
        ],
      },
    ],
  },
  plugins: [`@adobe/gatsby-theme-aio`],
};
