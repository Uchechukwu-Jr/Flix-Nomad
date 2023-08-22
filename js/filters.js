function renderfilters() {
  let filtersHTML = "";
  filtersHTML += `
      <div class="container mb-2">
        <h3>Filter by genre</h3>
        <select class="form-select" id="genreFilter">
          <option selected value="all">Show all genres</option>
          <option value="action">action</option>
          <option value="romance">romance</option>
          <option value="comedy">comedy</option>
          <option value="drama">drama</option>
          <option value="adventure">adventure</option>
          <option value="sci-fi">sci-fi</option>
          <option value="thriller">thriller</option>
          <option value="horror">horror</option>
          <option value="biography">Biography</option>
          <option value="history">History</option>
        </select>
      </div>
      <div class="container mb-2">
        <h3>Filter by year</h3>
        <select class="form-select" id="yearFilter">
          <option selected value="all">Show all years</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
          <option value="2007">2007</option>
          <option value="2006">2006</option>
          <option value="2005">2005</option>
          <option value="2004">2004</option>
          <option value="2003">2003</option>
          <option value="2002">2002</option>
          <option value="2001">2001</option>
          <option value="2000">2000</option>
          <option value="1999">1999</option>
          <option value="1998">1998</option>
          <option value="1997">1997</option>
          <option value="1996">1996</option>
          <option value="1995">1995</option>
        </select>
      </div>
    `;
  const filters = document.querySelector(".js-filters");
  filters.innerHTML = filtersHTML;
}
renderfilters();
