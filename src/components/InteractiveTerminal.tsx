import React, { useState } from 'react';
import { Copy, Check, Play } from 'lucide-react';

export const InteractiveTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'architecture' | 'stack' | 'status'>('terminal');
  const [copied, setCopied] = useState(false);
  const [commandOutput, setCommandOutput] = useState<string[]>([]);
  const [isExecuting, setIsExecuting] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const runSimulatedCommand = (cmd: string) => {
    if (isExecuting) return;
    setIsExecuting(true);
    setCommandOutput([`$ richard-cli ${cmd}`, '⚡ Initializing environment...']);

    setTimeout(() => {
      if (cmd === 'deploy --prod') {
        setCommandOutput((prev) => [
          ...prev,
          '📦 Compiling TypeScript & building client bundle...',
          '🔒 Verifying Supabase RLS policies & JWT keys...',
          '💳 Validating Paystack & Flutterwave webhook endpoints...',
          '✨ Deployment successful! Live at https://richarddairo.dev',
        ]);
      } else if (cmd === 'test --coverage') {
        setCommandOutput((prev) => [
          ...prev,
          '✓ Auth & Session Token Handlers (12 tests) PASS',
          '✓ Multi-vendor Escrow Payment Split (8 tests) PASS',
          '✓ Responsive DOM & Cart Reducer (15 tests) PASS',
          '📊 100% test suites passed (35/35)',
        ]);
      } else {
        setCommandOutput((prev) => [
          ...prev,
          '⚡ System Status: ALL PRODUCTION SYSTEMS OPERATIONAL',
          '● Database: PostgreSQL 16 (Connected)',
          '● Auth: Supabase Auth (Active)',
          '● Latency: 24ms (Edge Cached)',
        ]);
      }
      setIsExecuting(false);
    }, 600);
  };

  return (
    <div className="terminal-card">
      {/* Terminal Top Window Bar */}
      <div className="terminal-header">
        <div className="mockup-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        {/* Tab Buttons */}
        <div className="terminal-tabs">
          <button
            className={`terminal-tab-btn ${activeTab === 'terminal' ? 'active' : ''}`}
            onClick={() => setActiveTab('terminal')}
          >
            terminal.sh
          </button>
          <button
            className={`terminal-tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
            onClick={() => setActiveTab('architecture')}
          >
            architecture.ts
          </button>
          <button
            className={`terminal-tab-btn ${activeTab === 'stack' ? 'active' : ''}`}
            onClick={() => setActiveTab('stack')}
          >
            stack.json
          </button>
          <button
            className={`terminal-tab-btn ${activeTab === 'status' ? 'active' : ''}`}
            onClick={() => setActiveTab('status')}
          >
            status.log
          </button>
        </div>

        <button
          className="btn-ghost terminal-copy-btn"
          style={{ padding: '0.2rem 0.4rem', fontSize: '0.75rem' }}
          onClick={() => copyToClipboard('npx richard-dairo --skills')}
          title="Copy command"
        >
          {copied ? <Check size={14} className="copy-check-icon" /> : <Copy size={14} />}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="terminal-body">
        {activeTab === 'terminal' && (
          <div>
            <div className="code-line">
              <span className="code-num">1</span>
              <span className="code-comment">// Initializing Richard Dairo's product engine</span>
            </div>
            <div className="code-line">
              <span className="code-num">2</span>
              <span className="code-content">
                <span className="code-keyword">const</span> developer = <span className="code-fn">new Developer</span>({`{`}
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">3</span>
              <span className="code-content" style={{ paddingLeft: '1rem' }}>
                name: <span className="code-str">"Richard Dairo"</span>,
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">4</span>
              <span className="code-content" style={{ paddingLeft: '1rem' }}>
                specialty: <span className="code-str">"Web, Mobile & Backend Software Systems"</span>,
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">5</span>
              <span className="code-content" style={{ paddingLeft: '1rem' }}>
                focus: [<span className="code-str">"Marketplaces"</span>, <span className="code-str">"E-Commerce"</span>, <span className="code-str">"Payment APIs"</span>],
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">6</span>
              <span className="code-content" style={{ paddingLeft: '1rem' }}>
                status: <span className="code-str">"Building real-world digital products"</span>
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">7</span>
              <span className="code-content">{`});`}</span>
            </div>

            {/* Quick Interactive Command Buttons */}
            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => runSimulatedCommand('deploy --prod')}
                disabled={isExecuting}
                className="tech-pill accent"
                style={{ cursor: 'pointer' }}
              >
                <Play size={10} /> deploy --prod
              </button>
              <button
                onClick={() => runSimulatedCommand('test --coverage')}
                disabled={isExecuting}
                className="tech-pill"
                style={{ cursor: 'pointer' }}
              >
                <Play size={10} /> test --coverage
              </button>
            </div>

            {/* Dynamic Command Output */}
            {commandOutput.length > 0 && (
              <div className="terminal-output-box">
                {commandOutput.map((line, idx) => (
                  <div
                    key={idx}
                    className={`output-line ${
                      line.startsWith('✓') ? 'success' : line.startsWith('✨') ? 'highlight' : 'dim'
                    }`}
                  >
                    {line}
                  </div>
                ))}
              </div>
            )}

            <div className="terminal-cmd-prompt">
              <span className="prompt-arrow">➜</span>
              <span className="prompt-path">~/richard-dairo</span>
              <span className="prompt-branch">(main)</span>
              <span className="terminal-cursor"></span>
            </div>
          </div>
        )}

        {activeTab === 'architecture' && (
          <div>
            <div className="code-line">
              <span className="code-num">1</span>
              <span className="code-keyword">interface</span> <span className="code-fn">ProductArchitecture</span> {`{`}
            </div>
            <div className="code-line">
              <span className="code-num">2</span>
              <span className="code-content" style={{ paddingLeft: '1rem' }}>
                <span className="code-prop">presentationLayer</span>: <span className="code-str">"React 18"</span> | <span className="code-str">"Flutter Mobile"</span>;
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">3</span>
              <span className="code-content" style={{ paddingLeft: '1rem' }}>
                <span className="code-prop">databaseEngine</span>: <span className="code-str">"PostgreSQL + Supabase"</span>;
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">4</span>
              <span className="code-content" style={{ paddingLeft: '1rem' }}>
                <span className="code-prop">securityModel</span>: <span className="code-str">"Row Level Security (RLS)"</span>;
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">5</span>
              <span className="code-content" style={{ paddingLeft: '1rem' }}>
                <span className="code-prop">paymentGateways</span>: [<span className="code-str">"Paystack"</span>, <span className="code-str">"Flutterwave"</span>];
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">6</span>
              <span className="code-content" style={{ paddingLeft: '1rem' }}>
                <span className="code-prop">deliveryPipeline</span>: <span className="code-str">"Vercel Edge & Netlify CI/CD"</span>;
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">7</span>
              <span className="code-content">{`}`}</span>
            </div>
          </div>
        )}

        {activeTab === 'stack' && (
          <div>
            <div className="code-line">
              <span className="code-num">1</span>
              <span className="code-content">{`{`}</span>
            </div>
            <div className="code-line">
              <span className="code-num">2</span>
              <span className="code-content" style={{ paddingLeft: '1rem' }}>
                <span className="code-prop">"frontend"</span>: [<span className="code-str">"React"</span>, <span className="code-str">"TypeScript"</span>, <span className="code-str">"Flutter"</span>],
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">3</span>
              <span className="code-content" style={{ paddingLeft: '1rem' }}>
                <span className="code-prop">"backend"</span>: [<span className="code-str">"Supabase"</span>, <span className="code-str">"PostgreSQL"</span>, <span className="code-str">"REST APIs"</span>],
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">4</span>
              <span className="code-content" style={{ paddingLeft: '1rem' }}>
                <span className="code-prop">"fintech"</span>: [<span className="code-str">"Paystack"</span>, <span className="code-str">"Flutterwave"</span>, <span className="code-str">"Webhooks"</span>],
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">5</span>
              <span className="code-content" style={{ paddingLeft: '1rem' }}>
                <span className="code-prop">"auth"</span>: [<span className="code-str">"Supabase Auth"</span>, <span className="code-str">"Google OAuth"</span>]
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">6</span>
              <span className="code-content">{`}`}</span>
            </div>
          </div>
        )}

        {activeTab === 'status' && (
          <div>
            <div className="code-line">
              <span className="code-num">1</span>
              <span className="code-comment">[2026-08-20 05:00:00 UTC] SYSTEM HEALTH METRICS:</span>
            </div>
            <div className="code-line">
              <span className="code-num">2</span>
              <span className="code-content code-status-ok">
                ● PostgreSQL Cluster: CONNECTED (0 errors, 99.9% uptime)
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">3</span>
              <span className="code-content code-status-ok">
                ● Supabase RLS Policies: ENFORCED (100% active tables)
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">4</span>
              <span className="code-content code-status-ok">
                ● Paystack Webhook Listener: HEALTHY
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">5</span>
              <span className="code-content code-status-edge">
                ● Edge Network: 28 PoPs active, avg latency 18ms
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
