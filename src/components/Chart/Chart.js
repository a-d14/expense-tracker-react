import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = props => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximumValue = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => {
                return <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximumValue}
                    label={dataPoint.label}
                />
            })
            }
        </div>
    )
};

export default Chart;