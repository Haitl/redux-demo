import React from 'react';
import Link from '../containers/Link';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <Link viewType = {'SHOW_ALL'}> SHOW_ALL </Link>,
                <Link viewType = {'SHOW_COMPLETE'}> SHOW_COMPLETE </Link>,
                <Link viewType = {'SHOW_UNCOMPLETE'}> SHOW_UNCOMPLETE </Link>,
            </div>
        )
    }
}

export default Footer;