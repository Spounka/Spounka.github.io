import ProfileDescription from "../components/ProfileDescription";
import ProfileSection from "../components/ProfileSection";

function Introduction() {
    return (
        <section className="flex flex-col gap-5 mb-4">
            <ProfileSection>
                <ProfileDescription />
            </ProfileSection>
            <a
                href={"/cv.pdf"}
                download
                className={
                    "mt-[26px] bg-main-dark py-3 flex self-center justify-center text-white rounded-[40px] w-[150px] xl:w-[272px]"
                }>
                Download CV
            </a>
        </section>
    );
}

export default Introduction;
