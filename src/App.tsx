/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Wallet,
  Receipt,
  PieChart,
  FileText,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Plus,
  Send,
  Sparkles,
  ShieldCheck,
  Calendar,
  DollarSign,
  Clock,
  RotateCcw,
  Check,
  ChevronRight,
  ExternalLink,
  Target
} from 'lucide-react';

// Hero image asset
const HERO_IMAGE_PATH = '/src/assets/images/hero_finance_wallet_1793176976554.jpg';

interface DemoExpense {
  id: string;
  title: string;
  category: string;
  amount: number;
  date: string;
}

interface DemoInvoice {
  id: string;
  client: string;
  amount: number;
  status: 'Paid' | 'Pending';
  dueDate: string;
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interactive Practical Demo Simulator State
  const [activeTab, setActiveTab] = useState<'expenses' | 'invoices'>('expenses');
  const [expenses, setExpenses] = useState<DemoExpense[]>([
    { id: '1', title: 'College Textbook', category: 'Education', amount: 45.0, date: 'Oct 26' },
    { id: '2', title: 'Campus Cafeteria', category: 'Food & Dining', amount: 12.5, date: 'Oct 27' },
    { id: '3', title: 'Metro Transit Pass', category: 'Travel', amount: 18.0, date: 'Oct 28' },
  ]);

  const [invoices, setInvoices] = useState<DemoInvoice[]>([
    { id: 'INV-101', client: 'Campus Design Guild', amount: 150.0, status: 'Paid', dueDate: 'Oct 20' },
    { id: 'INV-102', client: 'Freelance Web Content', amount: 220.0, status: 'Pending', dueDate: 'Nov 02' },
  ]);

  const [customTitle, setCustomTitle] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [customCategory, setCustomCategory] = useState('Personal');

  // Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Calculations for Demo
  const totalExpenseAmount = expenses.reduce((sum, item) => sum + item.amount, 0);
  const monthlyBudgetLimit = 250.0;
  const budgetPercentage = Math.min(100, Math.round((totalExpenseAmount / monthlyBudgetLimit) * 100));

  const totalInvoiceAmount = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const pendingInvoiceAmount = invoices
    .filter((inv) => inv.status === 'Pending')
    .reduce((sum, inv) => sum + inv.amount, 0);

  // Handlers for Demo Simulator
  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTitle.trim() || !customAmount || isNaN(Number(customAmount))) return;

    const newExpense: DemoExpense = {
      id: Date.now().toString(),
      title: customTitle.trim(),
      category: customCategory,
      amount: parseFloat(customAmount),
      date: 'Today',
    };

    setExpenses([newExpense, ...expenses]);
    setCustomTitle('');
    setCustomAmount('');
  };

  const handleQuickAdd = (title: string, amount: number, category: string) => {
    const newExpense: DemoExpense = {
      id: Date.now().toString(),
      title,
      category,
      amount,
      date: 'Today',
    };
    setExpenses([newExpense, ...expenses]);
  };

  const handleToggleInvoice = (id: string) => {
    setInvoices(
      invoices.map((inv) =>
        inv.id === id ? { ...inv, status: inv.status === 'Paid' ? 'Pending' : 'Paid' } : inv
      )
    );
  };

  const handleResetDemo = () => {
    setExpenses([
      { id: '1', title: 'College Textbook', category: 'Education', amount: 45.0, date: 'Oct 26' },
      { id: '2', title: 'Campus Cafeteria', category: 'Food & Dining', amount: 12.5, date: 'Oct 27' },
      { id: '3', title: 'Metro Transit Pass', category: 'Travel', amount: 18.0, date: 'Oct 28' },
    ]);
    setInvoices([
      { id: 'INV-101', client: 'Campus Design Guild', amount: 150.0, status: 'Paid', dueDate: 'Oct 20' },
      { id: 'INV-102', client: 'Freelance Web Content', amount: 220.0, status: 'Pending', dueDate: 'Nov 02' },
    ]);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) return;
    setFormSubmitted(true);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      {/* 1. NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-8">
            {/* Brand Zone */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
            >
              <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                E
              </div>
              <span>
                Easy<span className="text-red-600">Expenso</span>
              </span>
            </a>

            {/* Nav Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
                className="hover:text-red-600 transition-colors whitespace-nowrap"
              >
                Home
              </a>
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('features');
                }}
                className="hover:text-red-600 transition-colors whitespace-nowrap"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('how-it-works');
                }}
                className="hover:text-red-600 transition-colors whitespace-nowrap"
              >
                How It Works
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className="hover:text-red-600 transition-colors whitespace-nowrap"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="hover:text-red-600 transition-colors whitespace-nowrap"
              >
                Contact
              </a>
            </nav>

            {/* Primary Action Button */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <button
                onClick={() => scrollToSection('features')}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 active:scale-[0.98] transition-all shadow-sm whitespace-nowrap cursor-pointer"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-slate-700 hover:text-red-600 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-5 space-y-3">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="block py-2 text-base font-medium text-slate-700 hover:text-red-600 border-b border-slate-100"
            >
              Home
            </a>
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('features');
              }}
              className="block py-2 text-base font-medium text-slate-700 hover:text-red-600 border-b border-slate-100"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('how-it-works');
              }}
              className="block py-2 text-base font-medium text-slate-700 hover:text-red-600 border-b border-slate-100"
            >
              How It Works
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="block py-2 text-base font-medium text-slate-700 hover:text-red-600 border-b border-slate-100"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="block py-2 text-base font-medium text-slate-700 hover:text-red-600 border-b border-slate-100"
            >
              Contact
            </a>
            <button
              onClick={() => scrollToSection('features')}
              className="w-full mt-2 px-4 py-2.5 text-center text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Academic Project Kicker Badge Banner */}
        <div className="bg-slate-50 border-b border-slate-200 py-2 px-4 text-center">
          <p className="text-xs font-medium text-slate-600 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            <span>Entrepreneurship Project (EP) Prototype</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-500">College Practical Examination 2026</span>
          </p>
        </div>

        {/* 2. HERO SECTION */}
        <section id="home" className="pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Headlines & CTAs */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-semibold text-red-700">
                  <Sparkles className="w-3.5 h-3.5 text-red-600" />
                  Personal Finance &amp; Invoice Tracker
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
                  Manage Your Money. <br className="hidden sm:inline" />
                  <span className="text-red-600">Simplify Your Life.</span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  Track expenses, manage invoices, and stay in control of your finances with EasyExpenso.
                </p>

                {/* Two Action Buttons as requested */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  <button
                    onClick={() => scrollToSection('features')}
                    className="w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-white bg-red-600 rounded-xl hover:bg-red-700 active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Explore Features</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => scrollToSection('about')}
                    className="w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 hover:text-slate-900 active:scale-[0.98] transition-all shadow-sm flex items-center justify-center cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>

                {/* Practical Journal Friendly Quick Highlights */}
                <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-left max-w-lg mx-auto lg:mx-0">
                  <div>
                    <div className="text-xl font-bold text-slate-900">100%</div>
                    <div className="text-xs text-slate-500">Student &amp; Freelancer Ready</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900">0</div>
                    <div className="text-xs text-slate-500">Hidden Fees or Setup</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-red-600">Instant</div>
                    <div className="text-xs text-slate-500">Expense &amp; Bill Log</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Illustration & Clean UI Preview */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Clean Card Container */}
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-3 bg-gradient-to-b from-slate-50/50 to-white">
                    {/* Illustration Asset */}
                    <div className="relative rounded-xl overflow-hidden bg-slate-50 border border-slate-100 aspect-4/3 flex items-center justify-center">
                      <img
                        src={HERO_IMAGE_PATH}
                        alt="EasyExpenso minimal wallet and expense tracking illustration"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          // Fallback container in case image is blocked
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Integrated Mini Financial Snapshot Card */}
                    <div className="mt-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs font-medium text-slate-500">Active Monthly Budget</span>
                          <div className="text-lg font-bold text-slate-900 tabular-nums">
                            ${totalExpenseAmount.toFixed(2)}{' '}
                            <span className="text-xs font-normal text-slate-500">/ ${monthlyBudgetLimit.toFixed(2)}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded bg-red-50 text-red-700 border border-red-100">
                            {budgetPercentage}% Used
                          </span>
                        </div>
                      </div>

                      {/* Budget Progress Bar */}
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-red-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${budgetPercentage}%` }}
                        ></div>
                      </div>

                      {/* Micro Invoices Indicator */}
                      <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100 text-slate-600">
                        <span className="flex items-center gap-1.5 font-medium">
                          <FileText className="w-3.5 h-3.5 text-red-600" />
                          <span>Invoices: {invoices.length} Registered</span>
                        </span>
                        <span className="text-emerald-700 font-semibold tabular-nums">
                          ${(totalInvoiceAmount - pendingInvoiceAmount).toFixed(2)} Received
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FEATURES SECTION */}
        <section id="features" className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                Core Capabilities
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Everything You Need to Master Your Money
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-600">
                Four simple, powerful tools designed specifically for easy day-to-day tracking and clear practical demonstrations.
              </p>
            </div>

            {/* 4 Required Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature 1: Expense Tracking */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Receipt className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    Expense Tracking
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Record and organize daily expenses effortlessly. Keep an accurate log of where your cash flows every single day.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-red-600 gap-1">
                  <span>Log items in seconds</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Feature 2: Budget Management */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <PieChart className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    Budget Management
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Set budgets and monitor spending. Define category limits and prevent unexpected end-of-month budget shortfalls.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-red-600 gap-1">
                  <span>Visual limit alerts</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Feature 3: Invoice Management */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    Invoice Management
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Create and organize invoices in one place. Keep records for freelance clients, college services, and projects.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-red-600 gap-1">
                  <span>Track paid &amp; pending</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Feature 4: Financial Overview */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    Financial Overview
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    View income, expenses, and savings summaries in clean, digestible cards without complicated mathematical formulas.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-red-600 gap-1">
                  <span>Clear summary metrics</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Interactive Feature Demo Showcase (Ideal for Practical Journal Screenshots) */}
            <div className="mt-14 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
                    <h3 className="text-lg font-bold text-slate-900">
                      Interactive Practical Demo (Live Demonstration)
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Try adding a test expense or updating an invoice status. Perfect for taking journal screenshots!
                  </p>
                </div>

                {/* Tabs & Reset */}
                <div className="flex items-center gap-2 self-stretch sm:self-auto">
                  <div className="flex bg-slate-100 p-1 rounded-lg">
                    <button
                      onClick={() => setActiveTab('expenses')}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                        activeTab === 'expenses'
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Expense Tracker
                    </button>
                    <button
                      onClick={() => setActiveTab('invoices')}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                        activeTab === 'invoices'
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Invoice Manager
                    </button>
                  </div>
                  <button
                    onClick={handleResetDemo}
                    title="Reset to default sample data"
                    className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-slate-50 rounded-lg border border-slate-200 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {activeTab === 'expenses' ? (
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Quick Add Form */}
                  <div className="lg:col-span-5 bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-4">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <Plus className="w-4 h-4 text-red-600" />
                      Add Test Expense
                    </h4>
                    <form onSubmit={handleAddExpense} className="space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Expense Title
                        </label>
                        <input
                          type="text"
                          value={customTitle}
                          onChange={(e) => setCustomTitle(e.target.value)}
                          placeholder="e.g. Lab Printing, Snacks, Bus"
                          className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Amount ($)
                          </label>
                          <input
                            type="number"
                            step="0.5"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            placeholder="0.00"
                            className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Category
                          </label>
                          <select
                            value={customCategory}
                            onChange={(e) => setCustomCategory(e.target.value)}
                            className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600"
                          >
                            <option value="Education">Education</option>
                            <option value="Food & Dining">Food &amp; Dining</option>
                            <option value="Travel">Travel</option>
                            <option value="Personal">Personal</option>
                          </select>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full py-2 px-4 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors cursor-pointer shadow-sm"
                      >
                        + Record Expense
                      </button>
                    </form>

                    {/* Quick Preset Buttons */}
                    <div className="pt-2">
                      <div className="text-[11px] font-medium text-slate-500 mb-2">Quick 1-Click Samples:</div>
                      <div className="flex flex-wrap gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleQuickAdd('Coffee & Snack', 6.5, 'Food & Dining')}
                          className="px-2.5 py-1 text-xs bg-white border border-slate-200 rounded-md hover:border-red-400 hover:text-red-600 text-slate-700 transition-colors"
                        >
                          + Coffee ($6.50)
                        </button>
                        <button
                          type="button"
                          onClick={() => handleQuickAdd('Project Stationery', 14.0, 'Education')}
                          className="px-2.5 py-1 text-xs bg-white border border-slate-200 rounded-md hover:border-red-400 hover:text-red-600 text-slate-700 transition-colors"
                        >
                          + Stationery ($14)
                        </button>
                        <button
                          type="button"
                          onClick={() => handleQuickAdd('Wi-Fi Recharge', 25.0, 'Personal')}
                          className="px-2.5 py-1 text-xs bg-white border border-slate-200 rounded-md hover:border-red-400 hover:text-red-600 text-slate-700 transition-colors"
                        >
                          + Wi-Fi ($25)
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right: Live List & Budget Summary */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                        <div className="text-xs text-slate-500">Total Spent</div>
                        <div className="text-xl font-bold text-slate-900 tabular-nums">
                          ${totalExpenseAmount.toFixed(2)}
                        </div>
                      </div>
                      <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                        <div className="text-xs text-slate-500">Budget Progress</div>
                        <div className="text-xl font-bold text-red-600 tabular-nums">
                          {budgetPercentage}% <span className="text-xs font-normal text-slate-500">of $250</span>
                        </div>
                      </div>
                    </div>

                    {/* Expense Items List */}
                    <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100">
                      {expenses.map((item) => (
                        <div key={item.id} className="p-3 flex items-center justify-between hover:bg-slate-50/80 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold text-xs">
                              {item.title.charAt(0)}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                              <div className="text-xs text-slate-500">
                                {item.category} · {item.date}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold text-slate-900 tabular-nums">
                              -${item.amount.toFixed(2)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Invoices Interactive Tab */
                <div className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="text-xs text-slate-500">Total Invoiced</div>
                      <div className="text-xl font-bold text-slate-900 tabular-nums">
                        ${totalInvoiceAmount.toFixed(2)}
                      </div>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="text-xs text-slate-500">Pending Dues</div>
                      <div className="text-xl font-bold text-amber-600 tabular-nums">
                        ${pendingInvoiceAmount.toFixed(2)}
                      </div>
                    </div>
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="text-xs text-slate-500">Settled (Paid)</div>
                      <div className="text-xl font-bold text-emerald-600 tabular-nums">
                        ${(totalInvoiceAmount - pendingInvoiceAmount).toFixed(2)}
                      </div>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100">
                    {invoices.map((inv) => (
                      <div key={inv.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/80 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center font-mono font-bold text-xs">
                            {inv.id}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900">{inv.client}</div>
                            <div className="text-xs text-slate-500">Due: {inv.dueDate}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 justify-between sm:justify-end">
                          <div className="text-sm font-bold text-slate-900 tabular-nums">
                            ${inv.amount.toFixed(2)}
                          </div>
                          <button
                            onClick={() => handleToggleInvoice(inv.id)}
                            className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors flex items-center gap-1 ${
                              inv.status === 'Paid'
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
                                : 'bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100'
                            }`}
                          >
                            <Check className="w-3 h-3" />
                            <span>{inv.status} (Click to toggle)</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs text-slate-500 text-center pt-2">
                    Tip: Click the status button on any invoice to toggle between Paid and Pending for demonstration.
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 4. HOW IT WORKS SECTION */}
        <section id="how-it-works" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                Simple Workflow
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                How It Works
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-600">
                A seamless 3-step system designed to eliminate financial stress without tedious bookkeeping.
              </p>
            </div>

            {/* 3 Simple Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-red-600 text-white font-extrabold text-lg flex items-center justify-center mb-6 shadow-sm">
                  01
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Record your expenses
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Log your everyday spends on food, commute, textbooks, or bills instantly from your phone or laptop with minimal taps.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  <span>Categorized in seconds</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-extrabold text-lg flex items-center justify-center mb-6 shadow-sm">
                  02
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Manage your budget &amp; invoices
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Set comfortable monthly expenditure targets and track client invoices in one centralized, clutter-free dashboard.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  <span>Real-time limit monitoring</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-red-600 text-white font-extrabold text-lg flex items-center justify-center mb-6 shadow-sm">
                  03
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Review your financial summary
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Gain immediate clarity on your savings, total expenditures, and outstanding earnings through visual, easy-to-read cards.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  <span>Clean analytical cards</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. BENEFITS SECTION */}
        <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                Value Proposition
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why Choose EasyExpenso?
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-600">
                Key benefits tailored for modern individuals who value simplicity, speed, and financial control.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Benefit 1 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Easy Expense Tracking
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Log transactions on the go with zero complicated accounting terminology or endless required fields.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4">
                  <PieChart className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Better Budget Planning
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Plan allowances and savings goals methodically to avoid running out of funds before the month concludes.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Organized Invoice Records
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Keep billings and freelance contracts systematic so you always know who owes what and when it is due.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Improved Financial Awareness
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Cultivate lifelong discipline and healthy financial habits through transparent, at-a-glance visibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. ABOUT SECTION */}
        <section id="about" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-xs font-semibold text-red-700 border border-red-200 mb-4">
                  <Target className="w-3.5 h-3.5" />
                  Academic Entrepreneurship Project (EP)
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  About EasyExpenso
                </h2>

                <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
                  EasyExpenso is a proposed personal finance management solution designed to help individuals organize their daily expenses, manage invoices, and make better financial decisions through a simple and user-friendly platform.
                </p>

                {/* Academic Context & Practical Objectives */}
                <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-red-600" />
                      Project Background &amp; Motivation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Conceived as an Entrepreneurship Project (EP) startup concept for university practical evaluation. It addresses the gap between complex corporate accounting packages and unstructured paper or spreadsheet notes.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600" />
                      Target User Personas
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Primary users include college students managing monthly allowances, young freelancers managing client deliverables, and individuals seeking financial mindfulness.
                    </p>
                  </div>
                </div>

                {/* Practical Journal Specifications Card */}
                <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold text-slate-900">Practical Journal Documentation Reference</div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Subject: Entrepreneurship Project (EP) · Status: Concept Validation &amp; Prototype Demonstration
                    </div>
                  </div>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-4 py-2 text-xs font-semibold text-red-600 bg-white border border-red-200 rounded-lg hover:bg-red-50 transition-colors shrink-0"
                  >
                    Submit Feedback
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CONTACT SECTION */}
        <section id="contact" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                  Connect With Us
                </span>
                <h2 className="mt-4 text-3xl font-extrabold text-slate-900 tracking-tight">
                  Contact EasyExpenso
                </h2>
                <p className="mt-2 text-sm sm:text-base text-slate-600">
                  Have feedback or queries about this startup demonstration? Send us a message below.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                {formSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Message Received!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-slate-900">{contactName}</span>. Your inquiry has been documented as part of the Entrepreneurship Project review.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setContactName('');
                        setContactEmail('');
                        setContactMessage('');
                      }}
                      className="mt-4 px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                    >
                      Send Another Response
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="e.g. rahul@university.edu"
                        className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        placeholder="Your thoughts, suggestions, or practical journal evaluation feedback..."
                        className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-all placeholder:text-slate-400 resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Message</span>
                    </button>
                    <p className="text-[11px] text-center text-slate-500 pt-1">
                      Visual academic demo form · Safe and local to your session.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 8. FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand and Tagline */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-red-600 text-white flex items-center justify-center font-bold text-xs">
                  E
                </div>
                <span className="text-base font-bold text-slate-900">
                  Easy<span className="text-red-600">Expenso</span>
                </span>
              </div>
              <p className="text-sm font-medium text-red-600 mt-1">
                Smart Spending. Better Planning.
              </p>
            </div>

            {/* Navigation Mirror */}
            <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-600">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
                className="hover:text-red-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('features');
                }}
                className="hover:text-red-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('how-it-works');
                }}
                className="hover:text-red-600 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className="hover:text-red-600 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="hover:text-red-600 transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Copyright Notice */}
            <div className="text-center md:text-right text-xs text-slate-500">
              <div>© 2026 EasyExpenso. Entrepreneurship Project.</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Designed for Academic Evaluation &amp; Journal Records.</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
