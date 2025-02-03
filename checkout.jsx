<main className="checkout-container">
  <div className="checkout-form">
    <h1>Finaliser votre réservation</h1>
    <hr />
    <form>
      <div className="form-group">
        <label>Nom complet</label>
        <input type="text" required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" required />
      </div>
      <div className="form-group">
        <label>Téléphone</label>
        <input type="tel" required />
      </div>
      <div className="form-group">
        <label>Numéro de carte</label>
        <input type="text" placeholder="1234 5678 9012 3456" required />
      </div>
      <div className="form-group">
        <label>Date d'expiration</label>
        <input type="text" placeholder="MM/AA" required />
      </div>
      <div className="form-group">
        <label>CVV</label>
        <input type="text" placeholder="123" required />
      </div>
      <button type="submit" className="btn">
        Confirmer la réservation
      </button>
    </form>
  </div>
</main>;
