import React, {Component} from "react";
import {AppBar} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link} from "react-router-dom";

class Navigation extends Component {
    render() {
        const styles = {
            appBar: {
                flexWrap: 'wrap'
            },
            tabs: {
                width: '100%'
            }
        };

        return (
            <AppBar style={styles.appBar}>
                <Tabs value={0} style={styles.tabs} >
                    <Tab value={0} label={'Home'} to={'/'} component={Link}/>
                    <Tab value={1} label={'Resume'} to={'/resume'} component={Link} />
                    <Tab value={1} label={'Contact'} to={'/contact'} component={Link}/>
                </Tabs>
            </AppBar>
        );
    }
}
export default Navigation