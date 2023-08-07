import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "./../../redux/actions/categoryAction";
import notify from "./../../hook/useNotifications";
import { createSubCategory } from "./../../redux/actions/subCategoryAction";

const AddSubCategorHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!navigator.onLine) {
      notify("هناك مشكله في اتصال الانترنت ", "warn");
      return;
    }
    dispatch(getAllCategory());
  }, []);

  const category = useSelector((state) => state.allCategory.category);
  const subCategory = useSelector((state) => state.subCategory.subCategory);

  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const [loading, setLoading] = useState(true);

  const handelChange = (e) => {
    setId(e.target.value);
  };

  const onChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (id == 0) {
      notify("من فضلك ادخل تصنيف رئيسي ", "warn");

      return;
    }

    if (name === "") {
      notify("من فضلك ادخل الاسم  ", "warn");

      return;
    }
    setLoading(true);
    await dispatch(
      createSubCategory({
        name: name,
        category: id,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setName("");
      setId(0);
      if (!navigator.onLine) {
        notify("هناك مشكله في اتصال الانترنت ", "warn");
        return;
      }
      if (subCategory.status === 201 || subCategory.status === 200) {
        notify("تم الاضافه بنجاح ", "success");
      } else if (subCategory.status === 400) {
        notify("الاسم مكرر ادخل اسم اخر ", "warn");
      } else {
        notify("حدث خطاء اثناء الاضافه ", "error");
      }
      setLoading(true);
    }
  }, [loading]);

  return [name, category, handelSubmit, handelChange, onChangeName];
};

export default AddSubCategorHook;
