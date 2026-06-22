import {useEffect, useState} from "react";
import axios from "axios";
import TestForm from "../components/Admin/TestForm";
import TestCardAdmin from "../components/Admin/TestCardAdmin";

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function AdminDashboard() {
    const [adminTests, setAdminTests] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editingTest, setEditingTest] = useState(null);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [questions, setQuestions] = useState([
        {
            type: "multiple",
            questionText: "",
            codeSnippet: "",
            options: ["", "", "", ""],
            correctIndex: 0,
        },
    ]);

    const loadTests = async () => {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API}/admin/tests`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        setAdminTests(res.data);
    };

    useEffect(() => {
        loadTests();
    }, []);

    const resetForm = () => {
        setTitle("");
        setDescription("");
        setCategory("");
        setQuestions([
            {
                type: "multiple",
                questionText: "",
                codeSnippet: "",
                options: ["", "", "", ""],
                correctIndex: 0,
            },
        ]);
        setEditingTest(null);
        setShowForm(false);
    };

    const openEdit = (test) => {
        setEditingTest(test);
        setTitle(test.title);
        setDescription(test.description || "");
        setCategory(test.category || "");
        setQuestions(
            test.Questions.map((q) => ({
                id: q.id,
                type: q.type || "multiple",
                questionText: q.questionText,
                codeSnippet: q.codeSnippet || "",
                options: q.options || ["", "", "", ""],
                correctIndex: q.correctIndex,
            }))
        );
        setShowForm(true);
    };

    const addQuestion = () => {
        setQuestions([
            ...questions,
            {
                type: "multiple",
                questionText: "",
                codeSnippet: "",
                options: ["", "", "", ""],
                correctIndex: 0,
            },
        ]);
    };

    const removeQuestion = (index) => {
        if (questions.length === 1) {
            alert("Должен остаться хотя бы один вопрос!");
            return;
        }
        setQuestions(questions.filter((_, i) => i !== index));
    };

    const handleQuestionChange = (index, field, value) => {
        const newQuestions = [...questions];
        newQuestions[index] = {...newQuestions[index], [field]: value};
        setQuestions(newQuestions);
    };

    const handleOptionChange = (qIndex, optIndex, value) => {
        const newQuestions = [...questions];
        const newOptions = [...newQuestions[qIndex].options];
        newOptions[optIndex] = value;
        newQuestions[qIndex] = {...newQuestions[qIndex], options: newOptions};
        setQuestions(newQuestions);
    };

    const handleCorrectIndexChange = (qIndex, optIndex) => {
        handleQuestionChange(qIndex, "correctIndex", optIndex);
    };

    const saveTest = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        const payload = {
            title,
            description,
            category,
            questions: questions.map((q) => ({
                type: q.type,
                questionText: q.questionText,
                codeSnippet: q.type === "code" ? q.codeSnippet : null,
                options: q.options,
                correctIndex: q.correctIndex,
            })),
        };

        try {
            if (editingTest) {
                await axios.put(`${API}/admin/tests/${editingTest.id}`, payload, {
                    headers: {Authorization: `Bearer ${token}`},
                });
                alert("Тест обновлён!");
            } else {
                await axios.post(`${API}/admin/tests`, payload, {
                    headers: {Authorization: `Bearer ${token}`},
                });
                alert("Тест создан!");
            }
            resetForm();
            loadTests();
        } catch (err) {
            alert("Ошибка: " + (err.response?.data?.msg || err.message));
        }
    };

    const deleteTest = async (id) => {
        if (!confirm("Удалить тест полностью?")) return;
        const token = localStorage.getItem("token");
        await axios.delete(`${API}/admin/tests/${id}`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        loadTests();
    };

    return (
        <div className="px-4 sm:px-6 lg:px-12.5 py-8 sm:py-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-10 gap-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold">
                    Админ-панель
                </h1>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="py-2.5 px-5 rounded-md bg-primary text-[#1A1C1E] font-semibold cursor-pointer w-full sm:w-auto"
                >
                    {showForm ? "Закрыть форму" : "+ Создать новый тест"}
                </button>
            </div>

            {showForm && (
                <TestForm
                    editingTest={editingTest}
                    title={title}
                    setTitle={setTitle}
                    description={description}
                    setDescription={setDescription}
                    category={category}
                    setCategory={setCategory}
                    questions={questions}
                    onAddQuestion={addQuestion}
                    onRemoveQuestion={removeQuestion}
                    onQuestionChange={handleQuestionChange}
                    onOptionChange={handleOptionChange}
                    onCorrectIndexChange={handleCorrectIndexChange}
                    onSave={saveTest}
                    onCancel={resetForm}
                />
            )}

            <h2 className="text-xl sm:text-2xl font-semibold mb-6">
                Существующие тесты
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {adminTests.map((test) => (
                    <TestCardAdmin
                        key={test.id}
                        test={test}
                        onEdit={openEdit}
                        onDelete={deleteTest}
                    />
                ))}
            </div>
        </div>
    );
}