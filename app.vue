<template>
  <div>
    <div class="columns">
      <div role="main" aria-label="Consulta para saber si usted es el beneficiario del Aporte Familiar Permanente" class="column">
        <header class="mb-6">
          <span class="is-upper-text-title">
            Servicio de información entregado por
            <a href="https://www.chileatiende.gob.cl/instituciones/AL005"
               title="Página web del Instituto de Previsión Social IPS" class="link">
              Instituto de Previsión Social
            </a>
          </span>

          <h1>¿Desea saber si usted es beneficiario del Aporte Familiar Permanente?</h1>
        </header>

        <section id="form_global" role="form">
          <div class="form-sector">
            <div class="field">
              <DsInput v-model="data.rut" label="Ingresa el RUT del beneficiario"
                placeholderText="Ejemplo: 12.345.678-9"
                required />

              <!-- <label for="input_run_example" class="label">
                Ingresa el RUT del beneficiario*
              </label> -->

              <!-- <div class="control has-icons-right">
                <input type="text" autocomplete="on" id="input_run_example" required
                       class="input is-danger" />

                <span class="icon is-right has-text-danger">
                  <i class="mdi mdi-alert-circle mdi-24px"></i>
                </span>
              </div> -->

              <!-- <p class="help is-danger">
                Completa este campo
              </p> -->
            </div>

            <!-- <span class="input-info">
              Ejemplo: 12.345.678-9
            </span> -->

            <!-- <label id="example_field_fecha_nacimiento" aria-label="fecha de nacimiento"
                   class="label">
              Indica la fecha de nacimiento*
            </label> -->

            <div class="columns is-mobile">
              <div class="column">
                <div class="field">
                  <DsDatePicker v-model="data.date"
                    labelText="Indica la fecha de nacimiento" required />

                  <!-- <div class="control is-expanded">
                    <span class="select is-fullwidth">
                      <select aria-labelledby="example_field_fecha_nacimiento" required>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">9</option> <option value="10">10</option> <option value="11">11</option> <option value="12">12</option> <option value="13">13</option> <option value="14">14</option> <option value="15">15</option> <option value="16">16</option> <option value="17">17</option> <option value="18">18</option> <option value="19">19</option> <option value="20">20</option> <option value="21">21</option> <option value="22">22</option> <option value="23">23</option> <option value="24">24</option> <option value="25">25</option> <option value="26">26</option> <option value="27">27</option> <option value="28">28</option> <option value="29">29</option> <option value="30">30</option> <option value="31">31</option></select></span> </div> </div></div> <div class="column"><div class="field"> <div class="control is-expanded"><span class="select is-fullwidth"><select aria-labelledby="example_field_fecha_nacimiento" required> <option value="Enero">Enero</option> <option value="Febrero">Febrero</option> <option value="Marzo">Marzo</option> <option value="Abril">Abril</option> <option value="Mayo">Mayo</option> <option value="Junio">Junio</option> <option value="Julio">Julio</option> <option value="Agosto">Agosto</option> <option value="Septiembre">Septiembre</option> <option value="Octubre">Octubre</option> <option value="Noviembre">Noviembre</option> <option value="Diciembre">Diciembre</option></select></span> </div> </div></div> <div class="column"><div class="field"> <div class="control is-expanded"><span class="select is-fullwidth"><select aria-labelledby="example_field_fecha_nacimiento" required> <option value="2020">2020</option> <option value="2019">2019</option> <option value="2018">2018</option> <option value="2017">2017</option> <option value="2016">2016</option> <option value="2015">2015</option> <option value="2014">2014</option> <option value="2013">2013</option> <option value="2012">2012</option> <option value="2010">2010</option> <option value="2009">2009</option> <option value="2008">2008</option> <option value="2007">2007</option> <option value="2006">2006</option> <option value="2005">2005</option> <option value="2004">2004</option> <option value="2003">2003</option> <option value="2002">2002</option> <option value="2001">2001</option> <option value="2000">2000</option> <option value="1999">1999</option> <option value="1998">1998</option> <option value="1997">1997</option> <option value="1996">1996</option> <option value="1995">1995</option> <option value="1994">1994</option> <option value="1993">1993</option> <option value="1992">1992</option> <option value="1991">1991</option> <option value="1990">1990</option> <option value="1989">1989</option> <option value="1988">1988</option> <option value="1987">1987</option> <option value="1986">1986</option> <option value="1985">1985</option> <option value="1984">1984</option> <option value="1983">1983</option> <option value="1982">1982</option> <option value="1981">1981</option> <option value="1980">1980</option> <option value="1979">1979</option> <option value="1978">1978</option> <option value="1977">1977</option> <option value="1976">1976</option> <option value="1975">1975</option> <option value="1974">1974</option> <option value="1973">1973</option> <option value="1972">1972</option> <option value="1971">1971</option> <option value="1970">1970</option> <option value="1969">1969</option> <option value="1968">1968</option> <option value="1967">1967</option> <option value="1966">1966</option> <option value="1965">1965</option> <option value="1964">1964</option> <option value="1963">1963</option> <option value="1962">1962</option> <option value="1961">1961</option> <option value="1960">1960</option> <option value="1959">1959</option> <option value="1958">1958</option> <option value="1957">1957</option> <option value="1956">1956</option> <option value="1955">1955</option> <option value="1954">1954</option> <option value="1953">1953</option> <option value="1952">1952</option> <option value="1951">1951</option> <option value="1950">1950</option> <option value="1949">1949</option> <option value="1948">1948</option> <option value="1947">1947</option> <option value="1946">1946</option> <option value="1945">1945</option> <option value="1944">1944</option> <option value="1943">1943</option> <option value="1942">1942</option> <option value="1941">1941</option> <option value="1940">1940</option> <option value="1939">1939</option> <option value="1938">1938</option> <option value="1937">1937</option> <option value="1936">1936</option> <option value="1935">1935</option> <option value="1934">1934</option> <option value="1933">1933</option>
                          <option value="1932">1932</option>
                          <option value="1931">1931</option>
                          <option value="1930">1930</option>
                      </select>
                    </span>
                  </div> -->
                </div>
              </div>
            </div>
          </div>

          <div class="cont-req">
            <span>Los campos marcados con * son obligatorios</span>
          </div>

          <div class="cont-btn">
            <DsButton color="primary" title="Continuar al paso siguiente">
              Consultar
            </DsButton>

            <!-- <button type="button" title="Continuar al paso siguiente"
                    aria-labelledby="form_global"
                    class="button is-primary">
              <span>Consultar</span>
            </button> -->
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
  import DsInput from './components/DesignSystem/components/form/input/DsInput.vue';
  import DsDatePicker from '~/components/DesignSystem/components/form/datePicker/DsDatePicker.vue';
  import DsButton from './components/DesignSystem/components/basic/button/DsButton.vue';

  const data = reactive({
    rut: '',
    date: null,
  });

</script>
