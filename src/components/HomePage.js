import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import Header from './components/Header';
// import Loader from './loaderCircular';
// import Loader from './components/loaderLinear';
import Paper from './components/paper';
import MediaCard from './components/MediaCard';
import Footer from './components/footer';

const styles = theme => ({
  margin: {
    marginTop: '30px'
  },
  pageFill: {
    minHeight: '99vh',
    position: 'relative'
  }
});

class HomePage extends Component {
  state = { loaded: false, mediaCards: [] };

  addMediaCard() {
    const numCards = this.state.mediaCards.length;
    const newMediaCards = [];
    newMediaCards.push(numCards);
    this.setState({ mediaCards: [...this.state.mediaCards, newMediaCards] });
  }

  removeMediaCard() {
    if (this.state.mediaCards.length > 0) {
      let removeMediaCards = this.state.mediaCards;
      removeMediaCards.pop();
      this.setState({ removeMediaCards });
    }
  }

  displayCards() {
    return this.state.mediaCards.map(card => {
      return <MediaCard key={card} />;
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.pageFill}>
        <Header headerName="Welcome" />
        {/* <Loader loaded={this.state.loaded} /> */}
        <Paper
          title="My name is Sean Collings"
          content="Please, have a look around"
        />
        <div
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            marginTop: '10px'
          }}
        >
          <Button
            onClick={() => {
              this.addMediaCard();
            }}
            style={{
              backgroundColor: '#350860',
              color: '#DEDEDE',
              marginRight: '10px'
            }}
          >
            Add Card
          </Button>
          <Button
            onClick={() => {
              this.removeMediaCard();
            }}
            style={{
              backgroundColor: '#FF4136',
              color: '#DEDEDE'
            }}
          >
            Remove Card
          </Button>
        </div>
        {this.displayCards()}
        <div
          style={this.state.mediaCards.length > 0 ? { height: '64px' } : {}}
        />
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
