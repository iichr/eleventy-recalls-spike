const govukEleventyPlugin = require('govuk-eleventy-plugin')

module.exports = function(eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.addPlugin(govukEleventyPlugin, {
        header: {
            productName: 'DVSA API Documentation',
            homepageUrl: '/',
            search: {
                indexPath: '/search.json',
            },
        },
        homeKey: 'DVSA API Documentation',
        headingPermalinks: true,
        stylesheets: ['/assets/swagger-ui.css']
    })

    // pretty printing of an object
    // usage {{ objectToDisplayInBrowser | stringify }}
    eleventyConfig.addFilter('stringify', function(value) {
        return JSON.stringify(value, null, 4);
    });
    
    // copy the recalls external api spec
    eleventyConfig.addPassthroughCopy(
        "recalls/vehicle-recalls-service/api-spec/external_api_recalls.yml");
    // copy the swagger-ui css
    eleventyConfig.addPassthroughCopy({"swagger/assets": "assets"})

    return {
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        dir: {
            layouts: 'node_modules/govuk-eleventy-plugin/layouts',
            includes: '_includes',
        }
    }
};
