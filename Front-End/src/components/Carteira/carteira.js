import React from 'react';

import './styles.scss';
import './index.tsx';
import HeaderHome from '../HeaderHome';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";

import {
    dashboardNASDAQChart,
  } from "../../variables/charts.js";

import { Line } from "react-chartjs-2";


class Carteira extends React.Component {
    render() {
        return (
            <>
                <div className="background">
                    <HeaderHome />
                    <div className="content">
                        <CardTitle tag="h2">Meus investimentos</CardTitle>
                        <CardBody></CardBody>
                        <p className="textoCarteira" tag="h4">Iglá, seu patrimônio hoje é de: <span className="valorInvestir">R$15.023,98</span></p>
                        <p className="textoCarteira" tag="h4">Total Investido: <span className="valorInvestir">R$14.000,00</span></p>
                        <Row>
                        <Col md="4">
                            <Card className="card-chart">
                                <CardHeader>
                                    <CardTitle tag="h5">Tesouro Selic</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Line
                                        data={dashboardNASDAQChart.data}
                                        options={dashboardNASDAQChart.options}
                                        width={400}
                                        height={100}
                                    />
                                </CardBody>
                                <CardFooter>
                                    <div className="chart-legend">
                                        <i className="fa fa-circle text-success" /> Investimento Inicial{" "}
                                        <i className="fa fa-circle text-danger" /> Investimento Total
                                    </div>
                                    <hr />
                                    <div className="card-stats">
                                        <i className="fa fa-check" /> Última atualização: 01/07/2020 23:45
                                </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-chart">
                                <CardHeader>
                                    <CardTitle tag="h5">Tesouro IPCA+</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Line
                                        data={dashboardNASDAQChart.data}
                                        options={dashboardNASDAQChart.options}
                                        width={400}
                                        height={100}
                                    />
                                </CardBody>
                                <CardFooter>
                                    <div className="chart-legend">
                                        <i className="fa fa-circle text-success" /> Investimento Inicial{" "}
                                        <i className="fa fa-circle text-danger" /> Investimento Total
                                    </div>
                                    <hr />
                                    <div className="card-stats">
                                        <i className="fa fa-check" /> Última atualização: 01/07/2020 23:45
                                </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-chart">
                                <CardHeader>
                                    <CardTitle tag="h5">CDB e LC</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Line
                                        data={dashboardNASDAQChart.data}
                                        options={dashboardNASDAQChart.options}
                                        width={400}
                                        height={100}
                                    />
                                </CardBody>
                                <CardFooter>
                                    <div className="chart-legend">
                                        <i className="fa fa-circle text-success" /> Investimento Inicial{" "}
                                        <i className="fa fa-circle text-danger" /> Investimento Total
                                    </div>
                                    <hr />
                                    <div className="card-stats">
                                        <i className="fa fa-check" /> Última atualização: 01/07/2020 23:45
                                </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        </Row>
                    </div>
                </div>
            </>
        );
    }
}

export default Carteira;
