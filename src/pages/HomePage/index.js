import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';

import Store from '../../stores/store';
import PizzaCard from '../../components/PizzaCard';
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.store = Store;
  }

  componentDidMount() {
    this.store.loadData('suggestion');
  }
  render() {
    return (
      <>
        <div className="container justify-content-center">
          <h2 className="text-center">
            Bem vindo ao Pizza Maker! <br />
            Aqui você pode montar sua pizza com os sabores que preferir <br /><br />
            <Link to='/base'><button type="button" className="btn btn-primary text-center">Vamos lá!</button></Link>
          </h2>
        </div>
        <div className="container justify-content-center mt-5">
          <h2 className="text-center">Ou se preferir pode escolher a nossa pizza do dia:</h2>
          <PizzaCard pizza={toJS(this.store.suggestion)} />
        </div>
        <div className="container justify-content-center mt-3 d-flex align-items-center">
          <button type="button" className="btn btn-primary" onClick={() => {this.store.acceptSuggestion(); this.props.history.push('/finish')}}>Aceitar sugestão!</button>
        </div>
      </>
    );
  }
}

export default observer(HomePage);
