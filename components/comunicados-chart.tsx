import React from "react"

import {
    ChartConfig,
    ChartContainer
} from "@/components/ui/chart"

import { IComunicadosChartProps } from "@/types"
import { Label, Pie, PieChart, PieLabelRenderProps } from 'recharts'


const RADIAN = Math.PI / 180

const defaultChartData = [
    {
        channel: "50",
        comunicados: 50,
        fill: "var(--color-desktop)",
    },
    {
        channel: "20",
        comunicados: 20,
        fill: "var(--color-mobile)",
    },
    {
        channel: "30",
        comunicados: 30,
        fill: "var(--color-tv)",
    },
]

const chartConfig: ChartConfig = {
    comunicados: {
        label: "Comunicados",
    },
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
    tv: {
        label: "TV",
        color: "hsl(var(--chart-3))",
    },
    email: {
        label: "Email",
        color: "hsl(var(--chart-4))",
    }
} satisfies ChartConfig


const ComunicadosChart: React.FC<IComunicadosChartProps> = ({
    chartData = defaultChartData,
    totalComunicados = 94035,
    percent = 80
}) => {

    const size = 200

    const oR = size / 2
    const iR = oR * 0.75

    const cx = size / 1.9
    const cy = size / 1.7


    const value = percent


    const needle = (
        value: number,
        data: Array<any>,
        cx: number,
        cy: number,
        iR: number,
        oR: number,
        color: string
    ) => {
        let total = 0
        data.forEach((item) => {
            total += item.comunicados
        })

        // Calcular o ângulo com base no valor fornecido
        const angle = 270.0 * (1 - (value / total))
        const radianAngle = (angle - 135) * (Math.PI / 180) // Ajustar para que o 0 seja à esquerda

        // Comprimento da agulha será baseado nos raios interno e externo
        const needleLength = (oR - iR) * 0.5 // Comprimento da agulha ajustado
        const needleBaseYOffset = iR // Deslocamento vertical para alinhar a base da agulha com o iR

        // Definir os pontos iniciais da agulha (formato padrão)
        const pointsOuter = [
            { x: 0, y: needleLength },  // Ponta da agulha (no intervalo entre iR e oR)
            { x: 5, y: 0 },              // Base direita da agulha
            { x: -5, y: 0 },             // Base esquerda da agulha
        ]

        // Definir os pontos da agulha interna (menor e mais estreita)
        const innerNeedleLength = needleLength * 0.6 // Comprimento menor para a agulha interna
        const pointsInner = [
            { x: 0, y: innerNeedleLength },  // Ponta da agulha interna
            { x: 3, y: 0 },                  // Base direita da agulha interna
            { x: -3, y: 0 },                 // Base esquerda da agulha interna
        ]

        // Função para rotacionar e transladar os pontos com base no ângulo e no centro (cx, cy)
        const rotateAndTranslate = (point: any) => ({
            x: cx + 5 + point.x * Math.cos(radianAngle) - (point.y + needleBaseYOffset) * Math.sin(radianAngle),
            y: cy + 5 - point.x * Math.sin(radianAngle) - (point.y + needleBaseYOffset) * Math.cos(radianAngle),
        })

        // Rotacionar e transladar cada ponto da agulha
        const rotatedPoints = pointsOuter.map(rotateAndTranslate)
        const rotatedPointsInner = pointsInner.map(rotateAndTranslate)

        // Gerar a string do path para o formato da agulha
        const outerNeedlePath = `
            M${rotatedPoints[0].x},${rotatedPoints[0].y} 
            L${rotatedPoints[1].x},${rotatedPoints[1].y} 
            L${rotatedPoints[2].x},${rotatedPoints[2].y} 
            Z
        `
        const innerNeedlePath = `
            M${rotatedPointsInner[0].x},${rotatedPointsInner[0].y} 
            L${rotatedPointsInner[1].x},${rotatedPointsInner[1].y} 
            L${rotatedPointsInner[2].x},${rotatedPointsInner[2].y} 
            Z
        `

        return [
            // Desenhar o círculo de fundo (o anel)
            <circle cx={cx} cy={cy} r={iR} fill="none" stroke={color} />,

            // Desenhar a agulha rotacionada corretamente
            <path d={outerNeedlePath} fill="white" stroke="white" />,

            // Contorno da agulha (opcional)
            <path d={innerNeedlePath} fill="#D9D9D9" />,
        ]
    }

    const CustomLabel = ({ cx = 0, cy = 0, outerRadius, endAngle = 0, value }: PieLabelRenderProps) => {
        const distance = 5 // Valor extra para afastar o label do gráfico
        const radius = Number(outerRadius) + distance // Aumenta o raio para criar o afastamento
        // Calcular a posição na extremidade final do segmento
        const x = Number(cx) + radius * Math.cos(-endAngle * RADIAN) // Posição x na extremidade final
        const y = Number(cy) + radius * Math.sin(-endAngle * RADIAN) // Posição y na extremidade final

        return (
            <text
                x={x}
                y={y}
                fill="hsla(var(--foreground))"
                textAnchor={x > Number(cx) ? 'start' : 'end'}
                dominantBaseline="middle"
            >
                {value}
            </text>
        )
    }

    return (
        <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
        >
            <PieChart>
                <Pie
                    data={chartData}
                    startAngle={225}
                    endAngle={-45}
                    cx={cx}
                    cy={cy}
                    dataKey="comunicados"
                    nameKey="channel"
                    innerRadius={iR}
                    outerRadius={oR}
                    strokeWidth={5}
                    labelLine={false}
                    label={({ cx, cy, outerRadius, endAngle, payload, ...rest }) => (
                        <CustomLabel
                            cx={cx}
                            cy={cy}
                            outerRadius={outerRadius}
                            endAngle={endAngle}
                            value={payload.comunicados}
                            {...rest}
                        />
                    )}
                >
                    <Label
                        content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (

                                    <text
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                    >

                                        <tspan
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            className="fill-muted-foreground text-3xl font-bold"
                                        >
                                            {totalComunicados.toLocaleString()}
                                        </tspan>
                                        <tspan
                                            x={viewBox.cx}
                                            y={(viewBox.cy || 0) + 24}
                                            className="fill-muted-foreground"
                                        >
                                            Comunicados
                                        </tspan>
                                    </text>
                                )
                            }
                        }}
                    />
                </Pie>

                {needle(value, chartData, cx, cy, iR, oR, 'var(--color-primary)')}
            </PieChart>
        </ChartContainer>

    )
}

export default ComunicadosChart