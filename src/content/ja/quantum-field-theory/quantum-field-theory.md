---
category: "quantum-field-theory"
title: "場の量子論"
---
## What

>The clue is in the name: it is the quantization of a classical field, the most familiar example of which is the electromagnetic field.
>
>In standard quantum mechanics, we’re taught to take the classical degrees of freedom and promote them to operators acting on a Hilbert space. The rules for quantizing a field are no different. Thus the basic degrees of freedom in quantum field theory are operator valued functions of space and time. This means that we are dealing with an infinite number of degrees of freedom — at least one for every point in space. This infinity will come back to bite on several occasions.
>
>It will turn out that the possible interactions in quantum field theory are governed by a few basic principles: locality, symmetry and renormalization group flow (the decoupling of short distance phenomena from physics at larger scales). These ideas make QFT a very robust framework: given a set of fields there is very often an almost unique way to couple them together.
>
>[@Tong:2016kpv]

場の量子論とは，その名が示す通り「場」の量子論である。この量子化は量子力学における正準量子化のように，古典場を時空の演算子値関数に昇格させることによって行われる。これは空間の各点に少なくとも1つの自由度が存在することを意味するため，状態空間はその意味で無限の自由度を持つ。この無限の自由度は，いくつかの場面で問題になることがある。具体的なラグランジアンの選び方は少数の基本原理（局所性，対称性，くりこみ群など）によってほぼ一意に決まる。

## Why

>In classical physics, the primary reason for introducing the concept of the field is to construct laws of Nature that are local. The old laws of Coulomb and Newton involve "action at a distance". This means that the force felt by an electron (or planet) changes immediately if a distant proton (or star) moves. This situation is philosophically unsatisfactory. More importantly, it is also experimentally wrong. The field theories of
Maxwell and Einstein remedy the situation, with all interactions mediated in a local fashion by the field.
>
>The requirement of locality remains a strong motivation for studying field theories in the quantum world. However, there are further reasons for treating the quantum field as fundamental.
>
>[@Tong:2016kpv]

場の古典論において場を導入する理由は，物理法則を局所的に記述するためである。同様の記述を量子論でも行いたい，ということが場の量子論を考える1つの理由として挙げられる。

>Because the combination of quantum mechanics and special relativity
implies that particle number is not conserved.
>
>[@Tong:2016kpv]

Heisenbergの不確定性原理は，長さ $L$ の領域で次のように表すことが出来る：
$$
\begin{equation}
    \Delta p \cdot L \gtrsim \hbar \label{eq:uncertainty-principle}
\end{equation}
$$
相対論的に運動量とエネルギーは同じ立場にあるものとして扱われるため，式 \eqref{eq:uncertainty-principle} は相対論的に次のように表せる：
$$
    \Delta E \cdot L \gtrsim \hbar c
$$
もし領域のサイズ $L$ がCompton波長 $\lambda_{\text{compton}}$ より小さい場合，すなわち
$$
    L \lesssim \frac{\hbar}{mc} \equiv \lambda_{\text{compton}}
$$
となる場合，エネルギーゆらぎ $\Delta E$ は2粒子分の静止エネルギー $2mc^2$ 以上になるため，粒子が生成される過程を考えることができる。実際，そのような過程は現実に起こる（[Experiment](#experiment)参照）。この過程は，Schrödinger方程式では記述できない。実際，相対論的な「Schrödinger方程式」を考えると，負の確率，負のエネルギー，因果律の破綻，といった問題が生じる。これらの問題を解決するためには，粒子の生成消滅を記述できる理論が必要である。そのような理論は，場を基本構成要素に据えることによって構築することが出来る。

>Because all particles of the same type are the same.
>
>[@Tong:2016kpv]

量子論において，同じ種類の粒子は区別することができない。このことは，同種粒子の入れ替えに対して状態が符号を除いて不変であることを意味する。この符号について粒子を分類することができ，実験的にスピンの値との対応が知られている：

| 符号 | 種類 | スピンの値 |
| :-: | :-: | :-: |
| $+$ | ボソン | 整数 |
| $-$ | フェルミオン | 半整数 |

このような統計とスピンの関係は，場を基本構成要素に据えることによって導くことが出来る。

## When

## Who

## Example

## Experiment

>An extreme demonstration of particle creation is shown in the picture, which comes from the Relativistic Heavy Ion Collider (RHIC) at Brookhaven, Long Island. This machine crashes gold nuclei together, each containing 197 nucleons. The resulting explosion contains up to 10,000 particles, captured here in all their beauty by the STAR detector.
>
>[@Tong:2016kpv]

粒子の生成についてRHICによる実験が有名である。197個の核子を含む金原子核を衝突させることによって，最大で10,000個の粒子が生成されたという実験結果がある。

## Application

>The answer is: almost everything. As I have stressed above, for any relativistic system it is a necessity. But it is also a very useful tool in non-relativistic systems with many particles. Quantum field theory has had a major impact in condensed matter, highenergy physics, cosmology, quantum gravity and pure mathematics. It is literally the language in which the laws of Nature are written.
>
>[@Tong:2016kpv]

場の量子論は量子系を相対論的に記述する理論であるから，そのようなセットアップで考えたい場合に用いることが出来る。しかし，実は非相対論的な多体系を記述するためにも有用である。さらに純粋数学の発展にも貢献している。

## Remark

## Mathematics

## References
