import { useLoaderData } from 'react-router-dom';
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,

} from 'recharts';

const Statistics = () => {
    const chart = useLoaderData();
    return (
        <div className='w-[80%] mx-auto mt-20 '>
            <h1 className='text-center text-3xl font-semibold'>Assignment Marks Chart</h1>

            <div className='flex justify-center mt-10'>
                <ComposedChart
                    width={500}
                    height={400}
                    data={chart}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="mark" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="mark" stroke="#ff7300" />
                </ComposedChart>
            </div>

        </div>
    );
};

export default Statistics;