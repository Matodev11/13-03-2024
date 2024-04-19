const Glovo = () => {
  return (
    <>
      <h1>kreiraj narudžbu</h1>
      <form className="form">
        <h3>Hrana</h3>
        <div className="field">
          <label htmlFor="food">Odaberi jelo</label>
          <select name="food" id="food">
            <option value="pizza">Pizza</option>
            <option value="hamburger">Hamburger</option>
            <option value="tacos">Tacos</option>
            <option value="spaghetti">Spaghetti</option>
            <option value="tortelini">Tortelini</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="quantity">Količina</label>
          <input name="quantity" type="number" id="quantity" />
        </div>
        <h3>Podaci za dostavu</h3>
        <div className="field">
          <label htmlFor="fullName">Ime i prezime</label>
          <input type="text" name="fullName" id="fullName" />
        </div>
        <div className="field">
          <label htmlFor="address">Adresa za dostavu</label>
          <input
            className="address"
            type="address"
            id="address"
            name="address"
          />
        </div>
        <button type="submit">Naruči</button>
      </form>
    </>
  );
};

export default Glovo;
