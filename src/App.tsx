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
  categories: string[];
  cuisines: string[];
  restaurants: RestaurantInterface[];
  activeRestaurant?: Partial<RestaurantInterface>;
}

export default class App extends React.Component<unknown, AppState> {

  state: AppState = {
    categories: [],
    cuisines: [],
    restaurants: [],
    activeRestaurant: {}
  }

  constructor() {
    super({});
    const api = new API('');
    this.handleRestaurantSelect = this.handleRestaurantSelect.bind(this);
    api.get('https://developers.zomato.com/api/v2.1/categories')
      .then(res => {
        this.setState({
          categories: res.categories
            .map((el: { categories: { id: number; name: string }}) => el.categories.name)
        });
      });
    api.get('https://developers.zomato.com/api/v2.1/cuisines?city_id=297')
      .then(res => {
        this.setState({ 
          cuisines: res.cuisines
            .map((el: { cuisine: { cuisine_id: number; cuisine_name: string; }}) => el.cuisine.cuisine_name)
        });
      });
    api.get('https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=&category=&start=0&count=20')
      .then(res => {
        this.setState({
          restaurants: res.restaurants
        });
      });
  }

  handleRestaurantSelect(index: number): void {
    this.setState({
      activeRestaurant: this.state.restaurants[index]
    }, () => console.log(this.state.activeRestaurant));
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
        <Filters categories={categories} cuisines={cuisines}></Filters>
        <RestaurantList onSelect={this.handleRestaurantSelect} restaurants={restaurantNames}></RestaurantList>
        <div className="results"></div>
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
