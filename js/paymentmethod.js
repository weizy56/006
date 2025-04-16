<script src="https://js.stripe.com/v3/"></script>

<form id="payment-form">
  <label for="card-holder-name">Card Holder Name:</label>
  <input type="text" id="card-holder-name" placeholder="Card Holder Name">

  <label for="card-number">Card Number:</label>
  <input type="text" id="card-number" placeholder="Card Number">

  <label for="card-expiry">Card Expiry:</label>
  <input type="text" id="card-expiry" placeholder="Card Expiry">

  <label for="card-cvc">Card CVC:</label>
  <input type="text" id="card-cvc" placeholder="Card CVC">

  <button id="submit-payment">Pay Now</button>
</form>

<script>
  // ... (JavaScript code to handle payment form submission and interaction with Stripe API) ...
</script>