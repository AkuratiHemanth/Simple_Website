import React from 'react';
import useStyles from './styles/AppStyles';
import Header from './components/Header';
import LoginForm from './components/LoginForm';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <LoginForm />
      <section className={classes.featuresSection}>
        <div className={classes.feature}>
          {/* Feature 1: Welcome Message */}
          <h2>Welcome to our Login Website</h2>
          <p>Explore the features and services we offer.</p>
        </div>
        <div className={classes.feature}>
          {/* Feature 2: Features Section */}
          <h2>Our Features</h2>
          <div className={classes.featureItem}>
            <div className={classes.featureIcon}>Icon</div>
            <div>
              <h3>Feature 1</h3>
              <p>Description of Feature 1.</p>
            </div>
          </div>
          <div className={classes.featureItem}>
            {/* Add more features here */}
          </div>
        </div>
      </section>
      <footer className={classes.footer}>
        {/* Footer Content */}
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        {/* Add social media links, contact info, etc. */}
      </footer>
    </div>
  );
};

export default App;
