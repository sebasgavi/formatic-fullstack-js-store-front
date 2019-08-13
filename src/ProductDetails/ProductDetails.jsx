import * as React from 'react';
import api from '../utils/api';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core'

class ProductDetails extends React.Component {

  constructor(props){
    super(props);

    console.log(props)

    this.state = {
      product: null,
    };

    api.getProductById(props.match.params.productId)
      .then(res => {
        this.setState({
          product: res.body
        });
      });
  }

  render() {

    const { name, description } = this.state.product || {};

    return  <Dialog
      fullWidth
      maxWidth="lg"
      open
      aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">{name || 'Cargando producto...'}</DialogTitle>
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.props.history.goBack()} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>;
    }
}

export default ProductDetails;