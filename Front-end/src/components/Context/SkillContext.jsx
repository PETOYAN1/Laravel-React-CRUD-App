import { createContext, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/';

const SkillContext = createContext();

const initialForm = {
    name: "",
    slug: ""
};

export const SkillProvider = ({ children }) => {
    const [formValue, setFormValue] = useState(initialForm);
    const [skills, setSkills] = useState([]);
    const [skill, setSkill] = useState([]);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormValue({...formValue, [name]: value});
    };
    const fetchSkills = async () => {
        const response = await axios.get('skills');
        setSkills(response.data.data);
    };
    const fetchSkill = async (id) => {
        const response = await axios.get("skills/" + id)
        const editData = response.data.data;
        setSkill(editData);
        setFormValue({
            name: editData.skillName,
            slug: editData.slug
        });
    };
    const storeSkill = async (e) => {
        e.preventDefault();
        try{
            await axios.post("skills", formValue);
            setFormValue(initialForm);
            navigate('/skills');
        } catch (e) {
            if(e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    }
    const updateSkill = async (e) => {
        e.preventDefault();
        try{
            await axios.put("skills/" + skill.id, formValue);
            setFormValue(initialForm);
            navigate('/skills');
        } catch (e) {
            if(e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    }
    const deleteSkill = async (id) => {
        if(!window.confirm("Are You Sure ?")) {
            return;
        }
        await axios.delete("skills/" + id);
        fetchSkills();
    }
  return <SkillContext.Provider value={{errors, skill, skills, setErrors,  storeSkill, deleteSkill, updateSkill, fetchSkills, fetchSkill, onChange, formValue}}>{children}</SkillContext.Provider>
};
export default SkillContext;
