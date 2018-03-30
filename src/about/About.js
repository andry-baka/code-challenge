import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';

const styles = theme => ({
  card: {
    maxWidth: 600,
  },
  media: {
    height: 194,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class About extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Key skill" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="Andry Baka"
            subheader="Key skill"
          />
          <CardMedia
            className={classes.media}
            image="https://media.licdn.com/dms/image/C5603AQFViLRzNN66WA/profile-displayphoto-shrink_200_200/0?e=1527566400&v=alpha&t=vraV0K6W2_j0XdQDPVkeYHUoVPJLv31oWwrPQ5O8CuA"
            title="Key skill"
          />
          <CardContent>
            <Typography component="p">
            Analyst at Mitrais
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more info"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Experience:
              </Typography>
              <Typography paragraph>
              Full-stack development for one of the biggest digital banking project in Indonesia. Technology used are: Javascript ES2017, React Native, NodeJs, Hapi, MongoDb, GraphQL, Apollo, Jest, Storybook, Webpack, Openshift, and Docker.
              </Typography>
              <Typography paragraph>
              Lead team to develop internal competency system project using fullstack MEAN (MongoDB, ExpressJs, AngularJs, NodeJs) technology.
              </Typography>
              <Typography paragraph>
              Developing and supporting various applications under Mincom Ellipse framework.
              </Typography>
              <Typography>
              More info at: https://www.linkedin.com/in/andry-baka-6239a940/
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);