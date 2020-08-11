import React, {Component} from 'react';
import {connect} from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";
import COLORS from "../../utils/colors";
import Button from "../Button/Button";
import {openSignUp, setLoginEmail, setLoginPassword} from "../../state/auth/actions";
import TextInput from "../Form/TextInput";

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    link: {
        color: COLORS.c5,
        fontWeight: 600,
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline',
        }
    },
    instructions: {
        marginTop: '1rem',
        lineHeight: '1.3rem'
    },
}

class LoginForm extends Component {

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <form className={classes.form} noValidate autoComplete="off">
                    <TextInput
                        required
                        label="E-mail"
                        value={this.props.login.email}
                        onChange={this.props.setLoginEmail}
                    />
                    <TextInput
                        required
                        label="Password"
                        type="password"
                        value={this.props.login.password}
                        onChange={this.props.setLoginPassword}
                    />
                </form>
                <Button> Login </Button>
                <div className={classes.instructions}>
                    <span className={classes.link}> Forgot password? </span> <br/>
                    <span> You don't have an account? <span className={classes.link} onClick={this.props.openSignUp}> Create a new account! </span> </span>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoginEmail: (event) => dispatch(setLoginEmail(event.target.value)),
        setLoginPassword: (event) => dispatch(setLoginPassword(event.target.value)),
        openSignUp: () => dispatch(openSignUp()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginForm));