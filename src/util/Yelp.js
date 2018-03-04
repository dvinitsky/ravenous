const apiKey = 'veN3nmGTTuRmQn0XyKNL3-PSlKcR45U0dc8KRrpeojkGfCe96lE9_ulAOykuogD49CooV1GxSfyvVPc0K3KbM6fALtLeGz8fwdK9NHQPNzBA9u0tWeIQdeaWgddsWnYx';

const businesses = [];

const Yelp = {  
    search: function(term, location, sortBy){
      const prepend = 'https://cors-anywhere.herokuapp.com/';
      const url = 'https://api.yelp.com/v3/businesses/search?term=' + term + '&location=' + location + '&sort_by=' + sortBy;
      const totalURL = prepend + url;
      
      return fetch(totalURL, {
            headers: {Authorization: 'Bearer ' + apiKey}
      }).then(response => {   
        if(response.ok){
          return response.json();
        }
        throw new Error('Request failed!');
      }, networkError => console.log(networkError.message)).then(jsonResponse => {
        
        if(jsonResponse.hasOwnProperty('businesses')) {
            this.businesses = jsonResponse.businesses;
            const waq = this.businesses.map(business => {

               return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories.title,
                    rating: business.rating,
                    reviewCount: business.review_count

                }
            });
          console.log(waq);
          return waq;
        }
      }); 
    }
};

export default Yelp;