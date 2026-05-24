import {PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer} from "recharts";
import type {Language} from "../Types/LanguageType.ts";

const COLORS = [
    "#534AB7",
    "#1D9E75",
    "#D85A30",
    "#378ADD",
    "#BA7517",
    "#993556",
    "#0F6E56",
    "#D4537E",
    "#639922"
]

interface Props {
    languages: Language[]
}

const LanguageDonut = ({ languages }: Props) => {
    return (
        <ResponsiveContainer width="100%" height={220}>
            <PieChart>
                <Pie
                    data={languages}
                    dataKey="count"
                    nameKey="language"
                    cx="50%"
                    cy="40%"
                    innerRadius={32.5}
                    outerRadius={65}
                >
                    {languages.map((_,i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]}/>
                    ))}
                </Pie>
                <Tooltip
                    formatter={(value, name) => [value, name]}
                    contentStyle={{
                        background: "#161b22",
                        border: "1px solid #30363d",
                        borderRadius: "8px",
                        fontSize: "12px"
                    }}
                />
                <Legend
                    formatter={(value) => (
                        <span style={{color: "#8b949e", fontSize: "12px"}}>{value}</span>
                    )}
                />
            </PieChart>
        </ResponsiveContainer>
    )
}

export default LanguageDonut