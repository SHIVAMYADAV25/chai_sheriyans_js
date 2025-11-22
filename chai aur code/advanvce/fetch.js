// browser way having its own fetching API which require browser dependence to run 
// node was not having any browser fetch
// so it recreate its own fetching API called fetch()

// IMP:
// when fetch return 404 it will be seen as Response unless and untill the (fetching failed) 
// error occured there will be no error shown

// with fetch we can give data to it like header
const options = {
  headers: {
    "Cache-Control": "max-age=60480",
  },
};

const req = new Request("flowers.jpg", options);
// fetch(resource, options)
// like this


// working (can check in IMG provided)
// fetch run first even if u declare it at the end
// because of the the priority queue specially design for run fetch in it

// fetch works in two way at one time:
// first => web browser/node => request (reject or resolve)
// second => data storing (onfulfiled/onreject) memory storing (variable) data will store(onfullfield or onreject)

// the request value will be store in onfullFilled or Onreject if done then onfullFilled if not then onreject

// onfullfield and Onrejection will be having function which are responsiable for stroing data in second phase (reference to IMG)
// then that data get's store in golbal response

// insimple:

// fetch do two thing when call first web request another is Data

// in web req it give resquest to the url given
//  after that the data received from the request is store in onfullfiled or onrejection
//  both are function who's reponsible to store the received data to store in Data which is going to be in global execution/or global accssablity