import { useForm, useFieldArray, Controller } from "react-hook-form";
import { IPost } from "../../../types/IPost";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { instance } from "../../../services/apiUrl";
import { PostContext } from "../../../contexts/PostProvider";

const PostForm = () => {
  const [tag, setTags] = useState<string[]>([]);
  const nav = useNavigate();
  const { dispathPost } = useContext(PostContext);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPost>({
    defaultValues: {
      tags: [{ tag: "" }],
    },
  });
  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/posts/tags");
      setTags(data);
    })();
  }, []);
  const { id } = useParams<string>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tags",
  });

  const onSubmit = async (formData: IPost) => {
    const postData = {
      title: formData.title,
      description: formData.description,
      tags: formData.tags.map((tag) => ({ tag: tag.tag })),
    };
    try {
      if (id) {
        const { data } = await instance.patch("/posts/" + id, postData);
        if (data) {
          dispathPost({
            type: "UPDATE_POST",
            payload: data,
          });
          alert("Update Post Successfully");
          nav("/admin");
        }
      } else {
        const { data } = await instance.post("/posts", postData);
        if (data) {
          dispathPost({
            type: "ADD_POST",
            payload: data,
          });
          alert("Add Post Successfully");
          nav("/admin");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
      <div className="mb-5">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Title
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="title"
          {...register("title")}
        />
        {errors.title && (
          <span className="text-red-500">{errors.title.message}</span>
        )}
      </div>
      <div className="mb-5">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Description
        </label>
        <textarea
          id="description"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("description")}
        />
        {errors.description && <p>{errors.description.message}</p>}
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Tags
        </label>
        {fields.map((field, index) => {
          const selectedTags = fields
            .map((f) => f.tag)
            .filter((_, i) => i !== index);
          const availableOptions = tag.filter(
            (tag) => !selectedTags.includes(tag)
          );
          return (
            <div key={field.id} className="flex gap-2 items-center mb-2">
              <Controller
                name={`tags.${index}.tag`}
                control={control}
                defaultValue={field.tag}
                render={({ field }) => (
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...field}
                  >
                    <option value="">Select a tag</option>
                    {availableOptions.map((tag, tagIndex) => (
                      <option key={tagIndex} value={tag}>
                        {tag}
                      </option>
                    ))}
                  </select>
                )}
              />
              <button
                type="button"
                className="h-fit rounded-full"
                onClick={() => remove(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
          );
        })}
        <button
          type="button"
          className="flex gap-2 items-center bg-yellow-200 py-1 rounded-lg px-2"
          onClick={() => append({ tag: "" })}
        >
          <span className="text-[11px] font-semibold">Add Tag</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
        {errors.tags && <p>{errors.tags.message}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-600 py-1.5 px-4 rounded-lg text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default PostForm;
