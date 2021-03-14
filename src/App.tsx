import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Restaurant from './components/Restaurant';
import RestaurantList from './components/RestaurantList';
import API from './util/API';

interface RestaurantInterface {
      restaurant: {
        R: {
          res_id: number;
          is_grocery_store: boolean;
          has_menu_status: {
            delivery: number;
            takeaway: number;
          }
        };
        apikey: string;
        id: string;
        name: string;
        url: string;
        location: {
          address: string;
          locality: string;
          city: string;
          city_id: number;
          latitude: string;
          longitude: string;
          zipcode: string;
          country_id: number;
          locality_verbose: string;
        };
        switch_to_order_menu: number;
        cuisines: string;
        timings: string;
        average_cost_for_two: number;
        price_range: number;
        currency: string;
        highlights: string[];
        offers: unknown[];
        opentable_support: number;
        is_zomato_book_res: number;
        mezzo_provider: string;
        is_book_form_web_view: number;
        book_form_web_view_url: string;
        book_again_url: string;
        thumb: string;
        user_rating: {
          aggregate_rating: string;
          rating_text: string;
          rating_color: string;
          rating_obj: {
            title: {
              text: string;
            };
            bg_color: {
              type: string;
              tint: string;
            }
          };
          votes: number;
        };
        all_reviews_count: number;
        photos_url: string;
        photo_count: number;
        menu_url: string;
        featured_image: string;
        medio_provider: boolean;
        has_online_delivery: number;
        is_delivering_now: number;
        store_type: string;
        include_bogo_offers: boolean;
        deeplink: string;
        is_table_reservation_supported: number;
        has_table_booking: number;
        events_url: string;
        phone_numbers: string;
        all_reviews: { reviews: { review: unknown[] }[] };
        establishment: string[];
        establishment_types: unknown[];
      }
}

interface AppState {
  categories: Category[];
  cuisines: Cuisine[];
  restaurants: RestaurantInterface[];
  activeRestaurant?: Partial<RestaurantInterface>;
  selectedCuisine?: number;
  selectedCategory?: number;
  page: number;
  isMoreRestaurants: boolean;
}

export interface Cuisine {
 cuisine: { cuisine_id: number; cuisine_name: string; }
}

export interface Category {
 categories: { id: number; name: string }
}


export default class App extends React.Component<unknown, AppState> {

  state: AppState = {
    categories: [],
    cuisines: [],
    restaurants: [],
    activeRestaurant: {},
    page: 0,
    selectedCategory: 2,
    isMoreRestaurants: true
  }

  api: API;

  constructor() {
    super({});
    this.api = new API('');
    this.handleRestaurantSelect = this.handleRestaurantSelect.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.getRestaurantData = this.getRestaurantData.bind(this);
    this.handleMore = this.handleMore.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.api.get('https://developers.zomato.com/api/v2.1/categories')
      .then(res => {
        this.setState({
          categories: res.categories
        });
      });
    this.api.get('https://developers.zomato.com/api/v2.1/cuisines?city_id=297')
      .then(res => {
        this.setState({ 
          cuisines: res.cuisines
        });
      });
    this.getRestaurantData();
  }

  getRestaurantData(page = 0, count = 20, category?: number, cuisine?: number): void {
    const categoryString = category !== undefined ? String(category) : '';
    const cuisineString = cuisine !== undefined ? String(cuisine) : '';
    const start = page * count;
    this.api.get(`https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=${cuisineString}&category=${categoryString}&start=${start}&count=${count}`)
      .then(res => {
        this.setState({
          restaurants: res.restaurants,
          isMoreRestaurants: res.results_shown > 0
        });
      });
  }

  handleRestaurantSelect(index: number): void {
    this.setState({
      activeRestaurant: this.state.restaurants[index]
    }, () => console.log(this.state.activeRestaurant));
  }

  handleMore(): boolean {
    this.setState({
      page: this.state.page + 1,
    }, () => {
      this.getRestaurantData(this.state.page, 20, this.state.selectedCategory, this.state.selectedCuisine);
    });
    return false;
  }

  handlePrevious(): void {
    this.setState({
      page: this.state.page - 1,
    }, () => {
      this.getRestaurantData(this.state.page, 20, this.state.selectedCategory, this.state.selectedCuisine);
    });
  }

  handleFilterChange(category?: number, cuisine?: number): void {
    this.setState({
      selectedCuisine: cuisine,
      selectedCategory: category,
      page: 0 
    }, () => {
      this.getRestaurantData(this.state.page, 20, this.state.selectedCategory, this.state.selectedCuisine);
    });
  }

  render(): JSX.Element {

    const { categories, cuisines, restaurants } = this.state;

    const restaurantNames: { name: string; }[] = [];
    for (const restaurant of restaurants as RestaurantInterface[]) {
      restaurantNames.push({
        name: restaurant.restaurant.name
      });
    }

    return (
      <div className="App">
        <Filters onChange={this.handleFilterChange} categories={categories} cuisines={cuisines}></Filters>
        <RestaurantList
          onMore={this.handleMore}
          isMore={this.state.isMoreRestaurants}
          isPrev={this.state.page > 0}
          onPrev={this.handlePrevious}
          onSelect={this.handleRestaurantSelect}
          restaurants={restaurantNames}
        ></RestaurantList>
        <Restaurant
          name={this.state.activeRestaurant?.restaurant?.name}
          address={this.state.activeRestaurant?.restaurant?.location.address}
          phone={this.state.activeRestaurant?.restaurant?.phone_numbers}
          cuisines={this.state.activeRestaurant?.restaurant?.cuisines}
          hours={this.state.activeRestaurant?.restaurant?.timings}
          delivery={this.state.activeRestaurant?.restaurant?.is_delivering_now}
          reservation={this.state.activeRestaurant?.restaurant?.is_table_reservation_supported}
          imageUrl={this.state.activeRestaurant?.restaurant?.featured_image}
        />
      </div>
    );
  }
}
