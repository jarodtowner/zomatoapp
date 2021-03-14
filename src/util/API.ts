export default class API {
  private baseUrl: string;

  /**
   * @param baseUrl The URL with which to prefix requests
   */
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get(url: string): Promise<any> {
    console.info(`GET: ${url}`);
    const requestUrl = `${this.baseUrl}${url}`;
    switch (requestUrl) {
    case 'https://developers.zomato.com/api/v2.1/categories':
      return require('./results/categories/categories-short.json');

      // Default url
    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=&category=&start=0&count=20':
      return require('./results/categories/dining/page1.json');

      // Delivery
    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=&category=1&start=0&count=20':
      return require('./results/categories/delivery/page1.json');
    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=&category=1&start=20&count=20':
      return require('./results/categories/delivery/page2.json');
    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=&category=1&start=40&count=20':
      // Mock File: categories/delivery/page3.json
      return require('./results/categories/delivery/page3.json');
    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=&category=1&start=60&count=20':
      // Mock File: categories/delivery/page4.json
      return require('./results/categories/delivery/page4.json');
    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=&category=1&start=80&count=20':
      // Mock File: categories/delivery/page5.json
      return require('./results/categories/delivery/page5.json');

      // Take-Away

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=&category=5&start=0&count=20':
      // Mock File: categories/take-away/page1.json
      return require('./results/categories/take-away/page1.json');
    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=&category=5&start=20&count=20':
      // Mock File: categories/take-away/page2.json
      return require('./results/categories/take-away/page2.json');
    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=&category=5&start=40&count=20':
      // Mock File: categories/take-away/page3.json
      return require('./results/categories/take-away/page3.json');
    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=&category=5&start=60&count=20':
      // Mock File: categories/take-away/page4.json
      return require('./results/categories/take-away/page4.json');
    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=&category=5&start=80&count=20':
      // Mock File: categories/take-away/page5.json
      return require('./results/categories/take-away/page5.json');

      // ### Bars and Pubs
    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=&category=11&start=0&count=20':
      // Mock File: categories/bars-and-pubs/page1.json
      return require('./results/categories/bars-and-pubs/page1.json');
    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=&category=11&start=20&count=20':
      // Mock File: categories/bars-and-pubs/page2.json
      return require('./results/categories/bars-and-pubs/page2.json');
    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=&category=11&start=40&count=20':
      // Mock File: categories/bars-and-pubs/page3.json
      return require('./results/categories/bars-and-pubs/page3.json');
    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=&category=11&start=60&count=20':
      // Mock File: categories/bars-and-pubs/page4.json
      return require('./results/categories/bars-and-pubs/page4.json');
    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=&category=11&start=80&count=20':
      // Mock File: categories/bars-and-pubs/page5.json
      return require('./results/categories/bars-and-pubs/page5.json');

      // ### Dining

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=&category=2&start=0&count=20':
      // Mock File: categories/dining/page1.json
      return require('./results/categories/dining/page1.json');

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=&category=2&start=20&count=20':
      // Mock File: categories/dining/page2.json
      return require('./results/categories/dining/page2.json');

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=&category=2&start=40&count=20':
      // Mock File: categories/dining/page3.json
      return require('./results/categories/dining/page3.json');

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=&category=2&start=60&count=20':
      // Mock File: categories/dining/page4.json
      return require('./results/categories/dining/page4.json');

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=&category=2&start=80&count=20':
      // Mock File: categories/dining/page5.json
      return require('./results/categories/dining/page5.json');

      // ## Cuisines

    case 'https://developers.zomato.com/api/v2.1/cuisines?city_id=297':
      // Mock File: cuisines/cuisines.json
      return require('./results/cuisines/cuisines-short.json');

      // ### Asian

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=3&category=&start=0&count=20':
      // Mock File: cuisines/asian/page1.json
      return require('./results/cuisines/asian/page1.json');

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=3&category=&start=20&count=20':
      // Mock File: cuisines/asian/page2.json
      return require('./results/cuisines/asian/page2.json');

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=3&category=&start=40&count=20':
      // Mock File: cuisines/asian/page3.json
      return require('./results/cuisines/asian/page3.json');

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=3&category=&start=60&count=20':
      // Mock File: cuisines/asian/page4.json
      return require('./results/cuisines/asian/page4.json');

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=3&category=&start=80&count=20':
      // Mock File: cuisines/asian/page5.json
      return require('./results/cuisines/asian/page5.json');

      // ### Bakery

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=5&category=&start=0&count=20':
      // Mock File: cuisines/bakery/page1.json
      return require('./results/cuisines/bakery/page1.json');

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=5&category=&start=20&count=20':
      // Mock File: cuisines/bakery/page2.json
      return require('./results/cuisines/bakery/page2.json');

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=5&category=&start=40&count=20':
      // Mock File: cuisines/bakery/page3.json
      return require('./results/cuisines/bakery/page3.json');

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=5&category=&start=60&count=20':
      // Mock File: cuisines/bakery/page4.json
      return require('./results/cuisines/bakery/page4.json');

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=5&category=&start=80&count=20':
      // Mock File: cuisines/bakery/page5.json
      return require('./results/cuisines/bakery/page5.json');

      // ### Cafe Food

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=1039&category=&start=0&count=20':
      // Mock File: cuisines/cafe-food/page1.json
      return require('./results/cuisines/cafe-food/page1.json');

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=1039&category=&start=20&count=20':
      // Mock File: cuisines/cafe-food/page2.json
      return require('./results/cuisines/cafe-food/page2.json');

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=1039&category=&start=40&count=20':
      // Mock File: cuisines/cafe-food/page3.json
      return require('./results/cuisines/cafe-food/page3.json');

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=1039&category=&start=60&count=20':
      // Mock File: cuisines/cafe-food/page4.json
      return require('./results/cuisines/cafe-food/page4.json');

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=1039&category=&start=80&count=20':
      // Mock File: cuisines/cafe-food/page5.json
      return require('./results/cuisines/cafe-food/page5.json');

      // ### Coffee and Tea

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=161&category=&start=0&count=20':
      // Mock File: cuisines/coffee-and-tea/page1.json
      return require('./results/cuisines/coffee-and-tea/page1.json');

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=161&category=&start=20&count=20':
      // Mock File: cuisines/coffee-and-tea/page2.json
      return require('./results/cuisines/coffee-and-tea/page2.json');

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=161&category=&start=40&count=20':
      // Mock File: cuisines/coffee-and-tea/page3.json
      return require('./results/cuisines/coffee-and-tea/page3.json');

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=161&category=&start=60&count=20':
      // Mock File: cuisines/coffee-and-tea/page4.json
      return require('./results/cuisines/coffee-and-tea/page4.json');

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=161&category=&start=80&count=20':
      // Mock File: cuisines/coffee-and-tea/page5.json
      return require('./results/cuisines/coffee-and-tea/page5.json');

      // ### Pizza

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=82&category=&start=0&count=20':
      // Mock File: cuisines/pizza/page1.json
      return require('./results/cuisines/pizza/page1.json');

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=82&category=&start=20&count=20':
      // Mock File: cuisines/pizza/page2.json
      return require('./results/cuisines/pizza/page2.json');

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=82&category=&start=40&count=20':
      // Mock File: cuisines/pizza/page3.json
      return require('./results/cuisines/pizza/page3.json');

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=82&category=&start=60&count=20':
      // Mock File: cuisines/pizza/page4.json
      return require('./results/cuisines/pizza/page4.json');

    case 'https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=82&category=&start=80&count=20':
      // Mock File: cuisines/pizza/page5.json
      return require('./results/cuisines/pizza/page5.json');

    default:
      return {
        results_shown: 0,
        restaurants: [],
      };
    }
  }
}
