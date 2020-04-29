from scrapy.spiders import CrawlSpider, Rule
from scrapy.crawler import CrawlerProcess
from scrapy.linkextractors import LinkExtractor

class InvanaWebsiteSpider(CrawlSpider):
    name = 'someuniversity'
    allowed_domains = ['www.someuniversity.ac.in']
    start_urls = ['http://www.someuniversity.ac.in/']

    rules = (
        Rule(LinkExtractor(), callback='parse_item', follow=True),
    )

    def parse_item(self, response):
        print(response.url)

def crawl_website(settings=None):
    process = CrawlerProcess(settings)

    process.crawl(InvanaWebsiteSpider)
    process.start()