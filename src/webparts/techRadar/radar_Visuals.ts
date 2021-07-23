export default class sample {

    public static templateHTML: string = 
    `
    <html>

    <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <title>Elantis Tech Radar</title>
    <link rel="shortcut icon" href="https://www.Elantis.de/favicon.ico">

    <script src="https://d3js.org/d3.v4.min.js"></script>
    <script src="radar.js"></script>

   
</head>

<body>
    
    <svg id="radar"></svg>    
    <table>
        <tr>
            <td>

                <h3>What is Core Context?</h3>

                <p>
                    The Elantis Core Context Tech Radar is a list of technologies, that have a <em>ring assignment</em>. We use four rings with the following semantics:
                </p>

                <ul>
                    <li><strong>MANAGE</strong> &mdash; Technologies we have high confidence in to serve our purpose, also in large scale. Technologies with a usage culture in our Elantis production environment, low risk and recommended to be widely used.</li>
                    <li><strong>STRATEGIC</strong> &mdash; Technologies that we have seen work with success in project work to solve a real problem; first serious usage experience that confirm benefits and can uncover limitations. Strategic technologies are
                        slightly more risky; some engineers in our organization walked this path and will share knowledge and experiences.</li>
                    <li><strong>FUTURE GROWTH</strong> &mdash; Technologies that are promising and have clear potential value-add for us; technologies worth to invest some research and prototyping efforts in to see if it has impact. Future Growth technologies
                        have higher risks; they are often brand new and highly unproven in our organisation. You will find some engineers that have knowledge in the technology and promote it, you may even find teams that have started a prototyping effort.</li>
                    <li><strong>DISTRACTION</strong> &mdash; Technologies not recommended to be used for new projects. Technologies that we think are not (yet) worth to (further) invest in. These technologies should not be used for new projects, but usually
                        can be continued for existing projects.</li>
                </ul>

            </td>
            <td>

                <h3>What is the purpose?</h3>

                <p>
                    The Core Context Tech Radar is a tool to inspire and support engineering teams at Elantis to pick the best technologies for new projects; it provides a platform to share knowledge and experience in technologies, to reflect on technology decisions and
                    continuously evolve our technology landscape. Based on the <a href="https://www.thoughtworks.com/radar">pioneering work of ThoughtWorks</a>, our Core Context Tech Radar sets out the changes in technologies that
                    are interesting in software development &mdash; changes that we think our engineering teams should pay attention to and the team are using in their projects.
                </p>

                <h3>How do we maintain it?</h3>

                <p>
                    The Core Context Tech Radar is maintained by the <em>Elantis Technologists </em> &mdash; an open group of senior Elantis technologists committed to devote time to the Core Context Tech Radar purpose. The group self organises to maintain
                    the Radar documents. Assignment of technologies to rings is the outcome of ring change proposals, which are discussed and voted on in meetings. The Core Context Tech Radar depends on active participation and input from all teams at
                    Elantis.
                </p>

                <p>
                    There is also an <a href="https://techradar.Elantis.net/">internal version of the Tech Radar</a> that contains background information about each technology &mdash; when to use it, pros and cons, main risks, which teams at Elantis are
                    using it, and for what purpose.
                </p>

                <p>
                    <em>BTW, if you would like to create your own Tech Radar &mdash; we started with this from the zalando teams <a href="https://github.com/zalando/tech-radar">open sourced code</a> to generate this visualization.</em>
                </p>

            </td>
        </tr>
    </table>

    <script>
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-105375141-2', 'auto');
        ga('send', 'pageview');
    </script>

</body>

</html>
`
    
}