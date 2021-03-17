import React, { Component } from 'react';
class SubDevices extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="page-title--dashboard" style={{padding:"10px"}} >
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">New Group</button>
                    </div>
                    <br />
                    <div className="row" style={{ padding: "15px" }}>
                        <div className="col">
                            <span className="mr-2"><i className="fas fa-folder-open"></i></span>
                            <span className="mr-2">Unknown Groups</span>
                        </div>
                        <div className="col">
                            <span className="mr-2"><b>20</b></span>
                            <span className="mr-5"><i class="fas fa-users"></i></span>
                            <span className="mr-2"><b>30</b></span>
                            <span className="mr-5"><i className="fas fa-laptop-house"></i></span>
                        </div>
                    </div>
                    <div className="row" style={{ padding: "15px" }}>
                        <div className="col">
                            <span className="mr-2"><i className="fas fa-folder-open"></i></span>
                            <span className="mr-2">Phong 5</span>
                        </div>
                        <div className="col">
                            <span className="mr-2"><b>20</b></span>
                            <span className="mr-5"><i className="fas fa-users"></i></span>
                            <span className="mr-2"><b>30</b></span>
                            <span className="mr-5"><i className="fas fa-laptop-house"></i></span>
                            <span className="mr-2"><i className="fas fa-user-times"></i></span>
                        </div>
                    </div>
                    <div className="row" style={{ padding: "15px" }}>
                        <div className="col">
                            <span className="mr-2"><i className="fas fa-folder-open"></i></span>
                            <span className="mr-2">Phong 5</span>
                        </div>
                        <div className="col">
                            <span className="mr-2"><b>20</b></span>
                            <span className="mr-5"><i className="fas fa-users"></i></span>
                            <span className="mr-2"><b>30</b></span>
                            <span className="mr-5"><i className="fas fa-laptop-house"></i></span>
                            <span className="mr-2"><i className="fas fa-user-times"></i></span>
                        </div></div>
                    <div className="row" style={{ padding: "15px" }}>
                        <div className="col">
                            <span className="mr-2"><i className="fas fa-folder-open"></i></span>
                            <span className="mr-2">Phong 5</span>
                        </div>
                        <div className="col">
                            <span className="mr-2"><b>20</b></span>
                            <span className="mr-5"><i className="fas fa-users"></i></span>
                            <span className="mr-2"><b>30</b></span>
                            <span className="mr-5"><i className="fas fa-laptop-house"></i></span>
                            <span className="mr-2"><i className="fas fa-user-times"></i></span>
                        </div></div>
                    <div className="row" style={{ padding: "15px" }}>
                        <div className="col">
                            <span className="mr-2"><i className="fas fa-folder-open"></i></span>
                            <span className="mr-2">Phong 5</span>
                        </div>
                        <div className="col">
                            <span className="mr-2"><b>20</b></span>
                            <span className="mr-5"><i className="fas fa-users"></i></span>
                            <span className="mr-2"><b>30</b></span>
                            <span className="mr-5"><i className="fas fa-laptop-house"></i></span>
                            <span className="mr-2"><i className="fas fa-user-times"></i></span>
                        </div>

                        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg modal-dialog-centered " role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Create new group</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Name group</label>
                                            <input type="email" className="form-control" placeholder="Enter name group" />
                                            <br />
                                            <label htmlFor="exampleInputEmail1"><b>Invite members</b></label>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br />
                </div>


            </React.Fragment >
        );
    }
}
export default SubDevices;