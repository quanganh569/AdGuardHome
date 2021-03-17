import React, { Component } from 'react';
import SubDevices from './subDevices';

class Groups extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="page-header">
                    <div class="page-title--dashboard">
                        <h1 class="page-title pr-2">Devices</h1>
                    </div>
                </div>
                <SubDevices />
            </React.Fragment>

        );
    }
}

export default Groups;
